import React, { Component, PureComponent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

export function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    console.log("fetch users");
  };

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
