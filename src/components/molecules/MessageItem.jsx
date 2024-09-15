import React from "react";
import styled from "styled-components";
import {MessageText, MessageUsername, MessageCreatedAt} from "../atoms/MessageText";
import Avatar from "../atoms/Avatar";
import { mockUsers } from "../../data/mockData";


const MessageItem = ({ message, isOwnMessage }) => {
  //console.log(message)
  const user = mockUsers.find((u) => u.id === message.userId); 

  return (
    <MessageItemContainer isOwnMessage={isOwnMessage}>
    <AvatarNameContainer isOwnMessage={isOwnMessage}>
      {!isOwnMessage && (
        <>
          <Avatar src={user.avatar} />
          <div>
            <MessageUsername isOwnMessage={isOwnMessage}>{user.name}</MessageUsername>
          </div>
        </>
      )}
      {isOwnMessage && (
        <>
          <div>
            <MessageUsername isOwnMessage={isOwnMessage}>{user.name}</MessageUsername>
          </div>
          <Avatar src={user.avatar} />
        </>
      )}
    </AvatarNameContainer>

    <MessageContent isOwnMessage={isOwnMessage}>
      <MessageText>{message.text}</MessageText>
      <MessageCreatedAt isOwnMessage={isOwnMessage}>{message.createdAt}</MessageCreatedAt>
    </MessageContent>
  </MessageItemContainer>
  );
};

export default MessageItem;

const MessageItemContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: ${({ isOwnMessage }) => (isOwnMessage ? "flex-end" : "flex-start")};
  padding: 10px;
  margin-bottom: 10px;
  max-width: 95%; 
  align-self: ${({ isOwnMessage }) => (isOwnMessage ? "flex-end" : "flex-start")};
  //background-color: ${({ isOwnMessage }) => (isOwnMessage ? "#DCF8C6" : "#f1f1f1")}; 
  border-radius: 10px;
  position: relative;
`

export const AvatarNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isOwnMessage }) => (isOwnMessage ? "flex-end" : "flex-start")}; 
  margin-bottom: 5px;
flex-direction: row;
`;

export const MessageContent = styled.div`
max-width: 60%;
  background-color: ${({ isOwnMessage }) => (isOwnMessage ? "#bcd8a6" : "#fff")};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: ${({ isOwnMessage }) => (isOwnMessage ? "left" : "left")}; 
`;