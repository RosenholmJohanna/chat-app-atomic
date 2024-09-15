import React from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import MessageText from "../components/atoms/MessageText";
import Avatar from "../components/atoms/Avatar";

const AtomTestPage = () => {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Atom Testing Page</h2>
        <div>
          <h3>Button</h3>
          <Button>Click Me</Button>
        </div>
  
        <div>
          <h3>Input</h3>
          <Input placeholder="Type something..." />
        </div>

      <div>
        <h3>MessageText</h3>
        <MessageText>This is a message</MessageText>
      </div>

      <div>
        <h3>Avatar</h3>
        <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
      </div>
    
      </div>
    );
  };
  
  export default AtomTestPage;