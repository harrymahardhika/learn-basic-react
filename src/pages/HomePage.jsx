import ColorSwitcher from '../components/ColorSwitcher'
import Counter from '../components/Counter'
import DynamicList from '../components/DynamicList'
import Form from '../components/Form'
import MouseTracker from '../components/MouseTracker'
import ProductList from '../components/Products'
import TextInput from '../components/TextInput'
import ToggleVisibility from '../components/ToggleVisibility'
import UserList from '../components/UserList'
import WindowResizer from '../components/WindowResizer'
import Todo from '../components/todo/Todo'
import { useDocumentTitle } from '../hooks'

const HomePage = () => {
  useDocumentTitle('Home')

  return (
    <>
      <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">
        <Todo />
      </div>

      <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">
        <div className="bg-white rounded p-3">
          <Form />
        </div>

        <div className="bg-white rounded p-3">
          <UserList />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <ProductList />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <Counter />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <ToggleVisibility />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <TextInput />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <DynamicList />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <ColorSwitcher />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <WindowResizer />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <MouseTracker />
        </div>

        <div className="mt-4 bg-white rounded p-3">
          <MouseTracker />
        </div>
      </div>
    </>
  )
}

export default HomePage
