import React, {
  Component,
  PureComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { useSearchParam } from "react-use";
import "./index.css";

function SearchBox({ data = [] }) {
  const searchKey = useSearchParam("key") || "";
  const filtered = useMemo(() => {
    return data.filter((item) => item.email.includes(searchKey));
  }, [data, searchKey]);

  const handleSearch = useCallback((evt) => {
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?key=${evt.target.value}`
    );
  }, []);
  return (
    <div>
      <h2>movies</h2>
      <input value={searchKey} onChange={handleSearch}></input>
      <ul>
        {filtered.map((item) => (
          <li key={item.email}>
            {item.email} | {item.first_name} | {item.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const App = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    async function doFetch() {
      const res = await fetch("https://reqres.in/api/users");
      const json = await res.json();
      setData(json.data);
      console.log(json.data);
    }
    doFetch();
  }, []);
  return <SearchBox data={data} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
