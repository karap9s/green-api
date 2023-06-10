import React from "react";
import styles from "./conversations.module.css";
import CustomInput from "../../../componentUtils/CustomInput/CustomInput.jsx";

const Conversations = () => {
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  };
  return (
    <div className={styles.wrapper}>
      <CustomInput
        onKeyDown={onKeyDown}
        className={[styles.input]}
        placeholder="Новый чат"
      />
    </div>
  );
};

export default Conversations;
