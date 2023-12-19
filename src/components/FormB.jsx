import { useEffect, useState } from 'react'
import Button from './Button'
import Spinners from './Spinners'

/**
 * Aloha
 * @param
 * @returns
 */
const FormB = () => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    setTimeout(() => {
      setIsLoading(true)
    }, 10000)
  }, [])

  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.password === ''
    ) {
      alert('Please fill all fields')
      return
    }

    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.password.length > 0
    ) {
      console.log(formData)
    }
  }

  return isLoading ? (
    <Spinners />
  ) : (
    <>
      <div className="mb-3"></div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block">
            name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInput}
            className="w-full"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="block">
            email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInput}
            className="w-full"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="block">
            password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInput}
            className="w-full"
          />
        </div>

        <Button type="primary">Oke</Button>
      </form>
    </>
  )
}

export default FormB
