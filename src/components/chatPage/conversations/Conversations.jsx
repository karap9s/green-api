import React from "react";
import styles from "./conversations.module.css";
import CustomInput from "../../../componentUtils/CustomInput/CustomInput.jsx";

const Conversations = ({ conversations, setConversations, setActiveChat }) => {
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      if (conversations.length) return;
      setConversations((prev) => [...prev, event.target.value]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <CustomInput
        onKeyDown={onKeyDown}
        className={[styles.input]}
        placeholder="Новый чат"
      />

      <div className={styles.conversations}>
        {conversations.map((conversation, index) => (
          <div
            key={`${conversation.phone}-${index}`}
            className={styles.conversation}
            onClick={() => setActiveChat(true)}
          >
            {conversation}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conversations;
