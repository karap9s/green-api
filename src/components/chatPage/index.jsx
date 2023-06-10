import React, { useState } from "react";
import styles from "./index.module.css";
import Conversations from "./conversations/Conversations.jsx";
import Chat from "./chat/Chat.jsx";

const ChatPage = ({ data }) => {
  const [activeChat, setActiveChat] = useState("");
  const [conversations, setConversations] = useState({});

  return (
    <div className={styles.wrapper}>
      <Conversations
        setActiveChat={setActiveChat}
        conversations={conversations}
        setConversations={setConversations}
      />
      <Chat
        activeChat={activeChat}
        setConversations={setConversations}
        conversations={conversations}
      />
    </div>
  );
};

export default ChatPage;
