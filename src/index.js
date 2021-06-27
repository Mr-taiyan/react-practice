import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import useArticle from "./useArticle";
import useComment from "./useComment";
import useUser from "./useUser";
import CommentList from "./CommentList";

const ArticleView = ({ id }) => {
  const { data: article, loading, error } = useArticle(id);
  const { data: comments } = useComment(id);
  const { data: user } = useUser(article?.userId);

  if (error) return "Failed.";
  if (!article || loading) return "loading...";

  return (
    <div className="exp-09-article-view">
      <h1>
        {id}. {article.title}
      </h1>
      {user && (
        <div className="user-info">
          <img src={user.avatar} height="40px" alt="user"></img>
          <div>{user.name}</div>
          <div>{article.createdAt}</div>
        </div>
      )}
      <p>{article.content}</p>
      <CommentList data={comments || []} />
    </div>
  );
};

ReactDOM.render(<ArticleView id={1} />, document.getElementById("root"));
