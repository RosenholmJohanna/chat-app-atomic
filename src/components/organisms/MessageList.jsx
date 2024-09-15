import React from "react";
import MessageItem from "../molecules/MessageItem";
import { mockUsers } from "../../data/mockData";

const currentUser = mockUsers[0];


const MessageList = ({ messages }) => {
   console.log(messages)
  return (
    <ul>
      {messages.map((message) => (
        <MessageItem
         key={message.id}
         message={message}
         isOwnMessage={message.userId === currentUser.id}
         />
      ))}
    </ul>
  );
};

export default MessageList;