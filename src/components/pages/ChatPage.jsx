import React, { useState } from "react";
import ChatTemplate from "../templates/ChatTemplate";
import { mockConversations, mockMessages, mockUsers } from "../../data/mockData";

const ChatPage = () => {
   // const [selectedConversationId, setSelectedConversationId] = useState(null);
   const [messages, setMessages] = useState([]);
    //const [conversations] = useState(mockConversations);
    const user = mockUsers[0];

   

    const handleMessageSubmit = (newMessageText) => {
        const newMessage = {
          id: Date.now().toString(),
          text: newMessageText,
          userId: user.id,
          createdAt: new Date().toISOString(),
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      };

  return (
    <>
    <h1>Chat Page</h1>
    <ChatTemplate 
    messages={messages}
    onMessageSubmit={handleMessageSubmit}
    />
    </>
  );
};

export default ChatPage;