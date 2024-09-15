import React from "react";
import MessageText from "../atoms/MessageText";
import Avatar from "../atoms/Avatar";
import { mockUsers } from "../../data/mockData";

const MessageItem = ({ message }) => {
  const user = mockUsers.find((u) => u.id === message.userId); // Find the user by ID

  return (
    <div>
      {user ? <Avatar src={user.avatar} /> : <span>🪶</span>}
      <MessageText>{message.text}</MessageText>
    </div>
  );
};

export default MessageItem;