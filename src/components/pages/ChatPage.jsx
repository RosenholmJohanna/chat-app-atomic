import React, { useState } from "react";
import ChatTemplate from "../templates/ChatTemplate";
import { mockConversations, mockMessages, mockUsers } from "../../data/mockData";

const ChatPage = () => {
    const [selectedConversationId, setSelectedConversationId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [conversations] = useState(mockConversations);
    const user = mockUsers[0];

    const handleConversationSelect = (convoId) => {
        setSelectedConversationId(convoId);
        setMessages(mockMessages[convoId] || []);
      };

    const handleMessageSubmit = (newMessageText) => {
        const newMessage = {
          id: Date.now().toString(),
          text: newMessageText,
          userId: user.id,
          createdAt: new Date().toISOString().slice(0, 10),
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      };

  return (
    <>
    <h1>Chat Page</h1>
    <ChatTemplate 
    selectedConversationId={selectedConversationId}
    messages={messages}
    onMessageSubmit={handleMessageSubmit}
    conversations = {conversations}
    onConversationSelect={handleConversationSelect}
    />
    </>
  );
};

export default ChatPage;