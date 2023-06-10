import React from "react";
import styles from "./chat.module.css";
import CustomInput from "../../../componentUtils/CustomInput/CustomInput.jsx";

const Chat = ({ activeChat, messages, setMessages }) => {
  const onKeyDown = (event) => {
    const text = event.target.value;
    if (event.key === "Enter") {
      if (!text.length) return;
      setMessages((prevMessages) => [...prevMessages, text]);
      event.target.value = "";
    }
  };

  return (
    <div className={styles.wrapper}>
      {!activeChat && <p>Начните вашу переписку!</p>}
      {activeChat && (
        <div className={styles.chat_wrapper}>
          <div className={styles.chat}>
            {messages.map((message, index) => (
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
