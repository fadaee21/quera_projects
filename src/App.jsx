import { useState } from 'react'
import Form from './components/Form'
import FlashCard from './components/FlashCard'

function App() {
  const [flashCard, setFlashCard] = useState({
    word: '',
    persianEquivalent: '',
    gg: ''
  })

  return (
    <>
      <h1>{flashCard.gg}</h1>
      <div className="container">
        <Form setFlashCard={setFlashCard} />
        <FlashCard flashCard={flashCard} />
      </div>
    </>
  )
}

export default App
