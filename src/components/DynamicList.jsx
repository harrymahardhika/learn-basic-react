import { useEffect, useState } from 'react'

const DynamicList = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  )

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`])
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem} className="p-2 border rounded">
        Add Item
      </button>
    </div>
  )
}

export default DynamicList
