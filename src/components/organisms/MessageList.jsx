import React from "react";
import MessageItem from "../molecules/MessageItem";


const MessageList = ({ messages }) => {
   
  return (
    <ul>
      {messages.map((message) => (
        <MessageItem
         key={message.id}
         message={message} />
      ))}
    </ul>
  );
};

export default MessageList;