import React from "react";
import styles from "./conversations.module.css";
import CustomInput from "../../../componentUtils/CustomInput/CustomInput.jsx";

const Conversations = ({ conversations, setConversations, setActiveChat }) => {
  const onKeyDown = (event) => {
    const text = event.target.value;
    if (event.key === "Enter") {
      if (!text.length) return;
      setConversations((prev) => [...prev, { [event.target.value]: [] }]);
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
        {conversations.map((el, index) => {
          const key = Object.keys(el)[0];
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
