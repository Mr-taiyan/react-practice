import { Select, Table } from "antd";
import _ from "lodash";
import React, {
  Component,
  PureComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

const endpoint = "https://myserver.com/api/";

const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const execute = useCallback(async () => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const res = await asyncFunction();
      setData(res);
    } catch (err) {
      setError(err);
    }
  }, [asyncFunction]);
  return { data, loading, error, execute };
};

const useArticles = () => {
  const { execute, data, loading, error } = useAsync(
    useCallback(async () => {
      const res = await fetch(`${endpoint}/posts`);
      return await res.json();
    }, [])
  );
  useEffect(() => execute(), [execute]);
  return {
    articles: data,
    articlesLoading: loading,
    articlesError: error,
  };
};

const useCategories = () => {
  const { execute, data, loading, error } = useAsync(
    useCallback(async () => {
      const res = await fetch(`${endpoint}/categories`);
      return await res.json();
    }, [])
  );

  useEffect(() => execute(), [execute]);

  return {
    categories: data,
    categoriesLoading: loading,
    categoriesError: error,
  };
};

const useCombinedArticles = (articles, categories) => {
  return useMemo(() => {
    if (!articles || !categories) return null;
    return articles.map((article) => {
      return {
        ...article,
        category: categories.find(
          (c) => String(c.id) === String(article.categoryId)
        ),
      };
    });
  }, [articles, categories]);
};

const useFilteredArticles = (articles, selectedCategory) => {
  return useMemo(() => {
    if (!articles) return null;
    if (!selectedCategory) return articles;
    return articles.filter((article) => {
      return String(article?.category?.name) === String(selectedCategory);
    });
  }, [articles, selectedCategory]);
};

const columns = [
  { dataIndex: "title", title: "Title" },
  { dataIndex: ["category", "name"], title: "Category" },
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { articles, articlesError } = useArticles();
  const { categories, categoriesError } = useCategories();
  const combined = useCombinedArticles(articles, categories);
  const result = useFilteredArticles(combined, selectedCategory);

  const options = useMemo(() => {
    const arr = _.uniqBy(categories, (c) => c.name).map((c) => ({
      value: c.name,
      label: c.name,
    }));
    arr.unshift({ value: null, label: "All" });
    return arr;
  }, [categories]);

  if (articlesError || categoriesError) return "Failed";

  if (!result) return "loading...";

  return (
    <div>
      <Select
        value={selectedCategory}
        onChange={(value) => {
          setSelectedCategory(value);
        }}
        options={options}
        style={{ width: "200px" }}
        placeholder="Select a category"
      ></Select>
      <Table dataSource={result} columns={columns}></Table>
    </div>
  );
}

ReactDOM.render(<BlogList />, document.getElementById("root"));
