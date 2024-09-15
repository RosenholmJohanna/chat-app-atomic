import React from "react";
import NewMessageForm from "../molecules/NewMessageForm";

const NewMessageSection = ({ onMessageSubmit }) => {
    return <NewMessageForm onSubmit={onMessageSubmit} />;
  };
  
  export default NewMessageSection;