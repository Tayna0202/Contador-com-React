import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
    <div className='principal'>
      <h1>Simples Contador</h1>
      <h2>{value}</h2>
        <div>
          <button className='btn' onClick={() => setValue(value + 1)}>Incrementar</button>
          <button className='btn' onClick={() => setValue(value - 1)}>Decrementar</button>
          <button className='btn' onClick={() => setValue(0)}>Apagar tudo</button>
        </div>
    </div>
    </>
  )
}

export default App
