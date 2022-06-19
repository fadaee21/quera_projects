import React, { useState } from 'react'
import Select from './components/Select'
import Input from './components/Input'
import { units } from './units'

function App() {
  const [result, setResult] = useState(0)
  const [fromUnit, setFromUnit] = useState(1)
  const [toUnit, setToUnit] = useState(1)
  const [inputValue, setInputValue] = useState('')

  console.log(fromUnit)

  const handleConvert = () => {
    const newResult = (inputValue * fromUnit) / toUnit
    setResult(newResult)
  }


  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label={'Amount'} onChange={(e) => setInputValue(e.target.value)} />
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select  label={'From'} items={units} onChange={e => setFromUnit(e.target.value)} />
          <Select  label={'To'} items={units} onChange={e => setToUnit(e.target.value)} />
          <button onClick={handleConvert} >Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  )
}

export default App
