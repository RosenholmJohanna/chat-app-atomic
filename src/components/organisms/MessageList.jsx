import React from "react";
import MessageItem from "../molecules/MessageItem";


const MessageList = ({ messages }) => {
    console.log(messages)
  return (
    <ul>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </ul>
  );
};

export default MessageList;