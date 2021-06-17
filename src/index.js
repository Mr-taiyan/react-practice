import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";

export default function SearchUserList({ onClick }) {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users/");
      setUsers(await res.json());
    })();
  }, []);
  let usersToShow = useMemo(() => {
    console.log("run memo");
    if (!users) return [];
    return users.data.filter((user) => user.first_name.includes(searchKey));
  }, [users, searchKey]);
  console.log("run search user list");
  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      ></input>
      <UserList usersToShow={usersToShow} />
      <button onClick={onClick}>+</button>
    </div>
  );
}

function UserList({ usersToShow }) {
  console.log("render userList");
  return (
    <ul>
      {usersToShow.map((user) => (
        <li key={user.id}>{user.first_name}</li>
      ))}
    </ul>
  );
}

function MyComponent() {
  const [num, setNum] = useState(0);
  function handleClick() {
    setNum(num + 1);
  }
  return (
    <div>
      {num}
      <SearchUserList onClick={handleClick}></SearchUserList>
    </div>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
