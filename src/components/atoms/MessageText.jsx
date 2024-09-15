import styled from "styled-components";

export const MessageText = styled.p`
  color:black;
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.2;
  /* word-wrap: break-word;
  white-space: pre-wrap; */
  /* width: 50%; */
`;

export const MessageCreatedAt = styled.p`
  font-size: 10px;
  color: #888;
  font-style: italic;
  text-align: ${({ isOwnMessage }) => (isOwnMessage ? "right" : "left")};
`;

export const MessageUsername = styled.p`
  font-size: 0.8rem;
  color: black;
  margin:0 5px 0 5px;
  font-weight: bolder;
  /* text-align: ${({ isOwnMessage }) => (isOwnMessage ? "right" : "left")}; */
`;

// export default MessageText;