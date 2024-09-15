import React from "react";
import Button from "../atoms/Button";

const ConversationItem = ({ convoId, lastMessage, onConversationSelect }) => {
  return (
    <div>
      <p>{lastMessage.text}</p>
      <Button onClick={() => onConversationSelect(convoId)}>Chat</Button>
    </div>
  );
};

export default ConversationItem;