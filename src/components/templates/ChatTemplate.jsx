import React from "react";
import MessageList from "../organisms/MessageList";
import NewMessageSection from "../organisms/NewMessageSection";
import ConversationsList from "../organisms/ConversationsList";

const ChatTemplate = ({
 onMessageSubmit,
 messages,
 conversations,
 onConversationSelect
}) => {
  return (
    <>
    <p>Select a conversation to view messages.</p>
    <ConversationsList
        conversations={conversations}
        onConversationSelect={onConversationSelect}
      />
    <MessageList messages={messages} />
    <NewMessageSection onMessageSubmit={onMessageSubmit} />
    </>
  );
};

export default ChatTemplate;