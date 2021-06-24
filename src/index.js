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

function FilterList({ data }) {
  const [searchKey, setSearchKey] = useState("");

  const filtered = useMemo(() => {
    return data.filter((item) => {
      return item.email.includes(searchKey);
    });
  }, [data, searchKey]);

  const handleSearch = useCallback(
    (evt) => {
      setSearchKey(evt.target.value);
    },
    [setSearchKey]
  );
  return (
    <div>
      <input value={searchKey} onChange={handleSearch}></input>
      {filtered &&
        filtered.map(({ email, first_name, last_name }) => (
          <div key={email}>
            {email} | {first_name} | {last_name}
          </div>
        ))}
    </div>
  );
}

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setData(json.data);
      console.log(json.data);
    };
    doFetch();
  }, []);
  return (
    <div>
      <FilterList data={data}></FilterList>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
