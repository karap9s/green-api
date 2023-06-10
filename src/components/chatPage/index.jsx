import React, {useState} from "react";
import styles from "./index.module.css";
import Conversations from "./conversations/Conversations.jsx";
import Chat from "./chat/Chat.jsx";

const ChatPage = ({data}) => {
    const [activeChat, setActiveChat] = useState(true);
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);

    return (
        <div className={styles.wrapper}>
            <Conversations
                conversations={conversations}
                setConversations={setConversations}
            />
            <Chat activeChat={activeChat} messages={messages} setMessages={setMessages}/>
        </div>
    );
};

export default ChatPage;
