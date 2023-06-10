import "./App.css";
import WelcomePage from "./components/welcomePage";
import ChatPage from "./components/chatPage/index.jsx";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(
    localStorage.getItem("id") && localStorage.getItem("token")
      ? {
          id: localStorage.getItem("id"),
          token: localStorage.getItem("token"),
        }
      : undefined
  );

  return (
    <div className="wrapper">
      {!data && <WelcomePage setData={setData} />}
      {data && <ChatPage data={data} />}
    </div>
  );
}

export default App;
