import FieldLayout from './FieldLayout'
import PropTypes from 'prop-types'

const Field = ({ field, onClick }) => {
  return <FieldLayout field={field} onClick={onClick} />
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

export default Field
