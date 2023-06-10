import React from "react";
import styles from "./chat.module.css";
import CustomInput from "../../../componentUtils/CustomInput/CustomInput.jsx";
import sendMessage from "../../../api/sendMessage.js";

const Chat = ({ activeChat, conversations, setConversations }) => {
  const onKeyDown = (event) => {
    const text = event.target.value;
    if (event.key === "Enter") {
      if (!text.length) return;
      setConversations((prev) => {
        const newVal = [...prev[activeChat], text];
        return { ...prev, [activeChat]: newVal };
      });

      sendMessage(localStorage.getItem("token"), activeChat, text);
      event.target.value = "";
    }
  };

  return (
    <div className={styles.wrapper}>
      {!activeChat && (
        <div className={styles.empty_wrapper}>
          <p>Начните вашу переписку!</p>
        </div>
      )}
      {activeChat && (
        <div className={styles.chat_wrapper}>
          <div className={styles.chat}>
            {conversations[activeChat]?.map((message, index) => (
              <p key={`${message}-${index}`}>{message}</p>
            ))}
          </div>
          <CustomInput onKeyDown={onKeyDown} className={[styles.chat_input]} />
        </div>
      )}
    </div>
  );
};

export default Chat;
