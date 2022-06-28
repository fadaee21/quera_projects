import React from 'react'
import { useState, useEffect } from 'react'
import './MessageForm.css'

function MessageForm({ onMessageSend }) {
  const [inputValue, setInputValue] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const myMessage = inputValue
    if (myMessage !== null && !/^ *$/.test(myMessage)) {
      setInputValue('')
      onMessageSend(myMessage, false)
      fetch(`http://localhost:3001/message/${inputValue}`)
        .then((res) => res.json())
        .then((response) => {
          onMessageSend(response.message, true)
        })
    }
  }

  const handleChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    document.getElementById('message-input').focus()
  })

  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          id="message-input"
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          value={inputValue}
          onChange={handleChangeInput}
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  )
}

export default MessageForm