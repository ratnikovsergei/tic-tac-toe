import './Field.css'

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

export default FieldLayout
