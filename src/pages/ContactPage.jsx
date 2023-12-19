import { useDocumentTitle } from '../hooks'

const ContactPage = () => {
  useDocumentTitle('Contact')

  return <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">Contact page</div>
}

export default ContactPage
