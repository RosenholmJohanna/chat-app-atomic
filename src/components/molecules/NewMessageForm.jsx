import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const NewMessageForm = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default NewMessageForm;