import React, { useState } from "react";
import styles from "./index.module.css";
import Conversations from "./conversations/Conversations.jsx";
import Chat from "./chat/Chat.jsx";

const ChatPage = ({ data }) => {
  const [activeChat, setActiveChat] = useState(false);
  const [conversations, setConversations] = useState([]);
  return (
    <div className={styles.wrapper}>
      <Conversations
        conversations={conversations}
        setConversations={setConversations}
      />
      <Chat />
    </div>
  );
};

export default ChatPage;
