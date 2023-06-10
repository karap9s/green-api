import React, { useState } from "react";
import styles from "./index.module.css";
import Conversations from "./conversations/Conversations.jsx";
import Chat from "./chat/Chat.jsx";

const ChatPage = ({ data }) => {
  const [activeChat, setActiveChat] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Conversations />
      <Chat />
    </div>
  );
};

export default ChatPage;
