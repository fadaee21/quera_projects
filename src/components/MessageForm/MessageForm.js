import React, { useState } from "react";
import "./MessageForm.css";

function MessageForm({ onMessageSend }) {
  const [message, setMessage] = useState({
    me: false,
    body: "",
  });

  const inputHandleChange = (e) => {
    const val = e.target.value;
    setMessage((old) => ({ ...old, body: val }));
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const me = message.me;
    const body = message.body;
    onMessageSend({ me, body });
    setMessage((old) => ({ ...old, body: "" }));
  }

  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          onChange={(e) => inputHandleChange(e)}
          value={message.body}
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
