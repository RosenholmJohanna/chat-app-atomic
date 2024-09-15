import React from "react";
import ConversationItem from "../molecules/ConversationItem";

const ConversationsList = ({ conversations, onConversationSelect }) => {
  return (
    <div>
      {conversations.map((convo) => (
        <ConversationItem
          key={convo.convoId}
          convoId={convo.convoId}
          lastMessage={convo.lastMessage}
          onConversationSelect={onConversationSelect}
        />
      ))}
    </div>
  );
};

export default ConversationsList;