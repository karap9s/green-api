import React from "react";
import styles from "./conversations.module.css";
import CustomInput from "../../../componentUtils/CustomInput/CustomInput.jsx";

const Conversations = ({ conversations, setConversations, setActiveChat }) => {
  const onKeyDown = (event) => {
    const text = event.target.value;
    if (event.key === "Enter") {
      if (!text.length) return;
      setConversations((prevConversations) => ({
        ...prevConversations,
        [text]: [],
      }));
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
        {Object.keys(conversations).map((key, index) => {
          return (
            <div
              key={index}
              className={styles.conversation}
              onClick={() => {
                console.log(key);
                setActiveChat(key);
              }}
            >
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Conversations;
