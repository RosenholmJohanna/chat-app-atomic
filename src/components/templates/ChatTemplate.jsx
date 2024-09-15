import React from "react";
import styled from "styled-components";
import MessageList from "../organisms/MessageList";
import NewMessageSection from "../organisms/NewMessageSection";
import ConversationsList from "../organisms/ConversationsList";

const ChatTemplate = ({
  selectedConversationId,
  onMessageSubmit,
  messages,
  conversations,
  onConversationSelect,
}) => {
  return (
    <ChatContainer>
      <ConversationsListItems>
        <ConversationsList
          conversations={conversations}
          onConversationSelect={onConversationSelect}
        />
        </ConversationsListItems>
        <ConversationWindow>
        {selectedConversationId ? (
          <>
            <MessageList messages={messages} />
            <NewMessageSection onMessageSubmit={onMessageSubmit} />
          </>
        ) : (
          <p>Select a conversation to view messages.</p>
        )}
      </ConversationWindow>
    </ChatContainer>
  );
};

export default ChatTemplate;

export const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

 const ConversationsListItems = styled.div`
  flex: 1;
  background-color: #f1f1f1; 
  padding: 20px;
  border-right: 1px solid #ccc;
  overflow-y: auto;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #ccc; 
  }
`;

export const ConversationWindow = styled.div`
  flex: 3;  
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
`;
