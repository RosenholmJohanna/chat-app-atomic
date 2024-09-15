import React, { useEffect, useState } from "react";
import ChatTemplate from "../templates/ChatTemplate";
import { mockConversations, mockMessages, mockUsers } from "../../data/mockData";

const ChatPage = () => {
   // const [selectedConversationId, setSelectedConversationId] = useState(null);
   // const [messages, setMessages] = useState([]);
    const [conversations] = useState(mockConversations);

    //  set first user in list to be logged in user
    //const user = mockUsers[0];

  

  return (
    <>
    <h1>Chat Page</h1>
    <ChatTemplate 
    conversations = {conversations} />
    </>
  );
};

export default ChatPage;