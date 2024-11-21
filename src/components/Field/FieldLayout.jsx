import './Field.css'
import PropTypes from 'prop-types'

const FieldLayout = ({ field, onClick }) => (
  <div className="field">
    {field.map((cell, index) => (
      <button
        className={`cell-btn ${cell}`}
        key={index}
        onClick={() => onClick(index)}
      >
        {cell}
      </button>
    ))}
  </div>
)

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

export default FieldLayout
