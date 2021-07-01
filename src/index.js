import React, { Component, PureComponent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NiceModalExample from "./NiceModalExample";

function Sider() {}

function UserList() {}

function UserInfoModal() {}

function MainLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);
  const showUserModal = (user) => {
    setModalVisible(true);
    setUser(user);
  };
  return (
    <div className="main-layout">
      <Sider onNewUser={showUserModal}></Sider>
      <UserList onEditUser={showUserModal}></UserList>
      <UserInfoModal visible={modalVisible} user={user}></UserInfoModal>
    </div>
  );
}

function App() {
  return (
    <div>
      <NiceModalExample />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
