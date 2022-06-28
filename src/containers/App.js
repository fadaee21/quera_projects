import React, { useCallback, useEffect, useState } from "react";
import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm/MessageForm";
import "./App.css";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  const [answer, setAnswer] = useState({
    body: "",
    me: true,
  });

  const reqChat = useCallback(() => {
    try {
      axios
        .get(`http://localhost:3001/message/${newMessage.body}`)
        .then((res) => {
          setAnswer((old) => ({ ...old, body: res.data.message }));
        });
    } catch (error) {
      console.log(error);
    }
  }, [newMessage]);

  useEffect(() => {
    if (newMessage.body) {
      reqChat();
      setMessages((old) => [...old, newMessage]);
    }
  }, [newMessage,reqChat]);

  useEffect(() => {
    if (answer.body) {
      setMessages((old) => [...old, answer]);
    }
  }, [answer]);

  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm onMessageSend={setNewMessage} />
    </div>
  );
}

export default App;
