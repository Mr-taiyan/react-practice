import { BrowserRouter, Link, Route } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="exp-15-page1">
      <div className="exp-15-page1-header">
        <Link to="/15/NestedRouting/page1/general">General</Link>
        <Link to="/15/NestedRouting/page1/profile">Profile</Link>
        <Link to="/15/NestedRouting/page1/settings">Settings</Link>
      </div>
      <div className="exp-15-page1-content">
        <Route path="/15/NestedRouting/page1/general">General Page</Route>
        <Route path="/15/NestedRouting/page1/profile">Profile Page</Route>
        <Route path="/15/NestedRouting/page1/settings">Settings Page</Route>
      </div>
    </div>
  );
};

const Page2 = () => "Page 2";
const Page3 = () => "Page 3";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Nested Routing</h1>
      <div className="exp-15-nested-routing">
        <div className="exp-15-sider">
          <Link to="/15/NestedRouting/page1">Page 1</Link>
          <Link to="/15/NestedRouting/page2">Page 2</Link>
          <Link to="/15/NestedRouting/page2">Page 3</Link>
        </div>
        <div className="exp-15-page-container">
          <Route path="/15/NestedRouting/page1">
            <Page1 />
          </Route>
          <Route path="/15/NestedRouting/page2">
            <Page2 />
          </Route>
          <Route path="/15/NestedRouting/page3">
            <Page3 />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
