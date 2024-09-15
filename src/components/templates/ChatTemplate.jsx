import React from "react";
import MessageList from "../organisms/MessageList";
import NewMessageSection from "../organisms/NewMessageSection";

const ChatTemplate = ({
 onMessageSubmit,
 messages
}) => {
  return (
    <>
    <p>Select a conversation to view messages.</p>
    <MessageList messages={messages} />
    <NewMessageSection onMessageSubmit={onMessageSubmit} />
    </>
  );
};

export default ChatTemplate;