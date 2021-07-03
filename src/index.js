import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function BlogPost() {
  let param = useParams();
  let { slug } = param;
  console.log(param);
  return <div>Now showing post {slug}</div>;
}

function HomePage() {
  return <div>home</div>;
}

ReactDOM.render(
  <Router>
    <Link to="/">homepage</Link>
    <Link to="/blog/test">slug</Link>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
