import React, { Component, PureComponent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const ChatAPI = {
  subscribeToFriendStatus(id, callback) {},
  unsubscribeToFriendStatus(id, callback) {},
};

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendId);
    return () => {
      ChatAPI.unsubscribeToFriendStatus(friendId, handleStatusChange);
    };
  }, [friendId]);

  return isOnline;
}

const friendList = [
  { id: 1, name: "phoebe" },
  { id: 2, name: "rachel" },
  { id: 3, name: "ross" },
];

function Circle({ color }) {
  return (
    <div
      style={{ width: "300px", height: "300px", background: `${color}` }}
    ></div>
  );
}

function ChatRecipientPicker() {
  const [recipientId, setRecipientId] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientId);

  return (
    <>
      <Circle color={isRecipientOnline ? "green" : "red"}></Circle>
      <select
        value={recipientId}
        onChange={(e) => setRecipientId(Number(e.target.value))}
      >
        {friendList.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}

ReactDOM.render(<ChatRecipientPicker />, document.getElementById("root"));
