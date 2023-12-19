import { useState } from 'react'

const TextInput = () => {
  const [text, setText] = useState('')

  const clear = () => {
    setText('')
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="rounded"
      />

      <button onClick={clear} className="ml-2 p-2 border rounded">
        Clear
      </button>

      <p>You typed: {text}</p>
    </div>
  )
}

export default TextInput
