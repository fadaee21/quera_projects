import { useState } from 'react'

function Form({ setFlashCard }) {

  const [word, setWord] = useState('')
  const [persianEquivalent, setPersianEquivalent] = useState('')
  const [gg, setGg] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFlashCard({ word, persianEquivalent, gg })
    setWord('')
    setPersianEquivalent('')
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <input
        id="word-input"
        placeholder="کلمه"
        value={word}
        onChange={(e => setWord(e.target.value))}
      />
      <input
        id="persian-equivalent-input"
        placeholder="معادل فارسی"
        value={persianEquivalent}
        onChange={e => setPersianEquivalent(e.target.value)}
      />

      <input
        id="persian-equivalent-input"
        placeholder="header"
        value={gg}
        onChange={e => setGg(e.target.value)}
      />
      <button id="submit-btn">ثبت</button>
    </form>
  )
}

export default Form
