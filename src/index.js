import React, { Component, PureComponent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function useFetchUsers(url) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json);
      setUsers(json.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return { users, loading, error, fetchUsers };
}

export function UserList() {
  const { fetchUsers, loading, error, users } = useFetchUsers(
    "https://reqres.in/api/users/"
  );
  return (
    <div className="user-list">
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "show users"}
      </button>
      {error && <div style={{ color: "red" }}>failed: {String(error)}</div>}
      <br />
      <ul>
        {users &&
          users.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}

ReactDOM.render(<UserList />, document.getElementById("root"));
