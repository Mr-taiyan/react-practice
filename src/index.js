import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import useArticle from "./useArticle";

const ArticleView = ({ id }) => {
  const { data, loading, error } = useArticle(id);
  if (error) return "Failed.";
  if (!data || loading) return "loading...";

  return (
    <div className="exp-09-article-view">
      <h1>
        {id}. {data.title}
      </h1>
      <p>{data.content}</p>
    </div>
  );
};

ReactDOM.render(<ArticleView id={123} />, document.getElementById("root"));
