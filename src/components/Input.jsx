import PropTypes from 'prop-types'

const Input = ({ type, value, onChange }) => {
  return <input type={type} className="block mb-3 rounded w-full" value={value} onChange={onChange} />
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
