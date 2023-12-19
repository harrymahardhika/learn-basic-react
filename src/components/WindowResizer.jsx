import { useState, useEffect } from 'react'

const WindowResizer = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <p>
        Width: {size.width}, Height: {size.height}
      </p>
    </div>
  )
}

export default WindowResizer
