import { useState } from 'react'

export const useInput = (type, initialValue) => {
  const [inputState, setInputState] = useState(initialValue)

  const onChange = (event) => {
    setInputState(event.target.value)
  }

  return { inputState, onChange, type }
}
