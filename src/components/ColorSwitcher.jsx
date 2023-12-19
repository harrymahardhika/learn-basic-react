import { useState } from 'react'

const ColorSwitcher = () => {
  const [color, setColor] = useState('red')

  return (
    <div>
      <p style={{ color: color }} className="mb-2 text-lg">
        This text changes color
      </p>

      <button
        className="mr-1 p-2 border rounded"
        onClick={() => setColor('red')}
      >
        Red
      </button>
      <button
        className="mr-1 p-2 border rounded"
        onClick={() => setColor('green')}
      >
        Green
      </button>
      <button
        className="mr-1 p-2 border rounded"
        onClick={() => setColor('blue')}
      >
        Blue
      </button>
    </div>
  )
}

export default ColorSwitcher
