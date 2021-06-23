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

const columns = [
  { dataIndex: "title", title: "Title" },
  { dataIndex: ["category", "name"], title: "Category" },
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { articles, articlesError } = useArticles();
  const { categories, categoriesError } = useCategories();
}

ReactDOM.render(<div>test</div>, document.getElementById("root"));
