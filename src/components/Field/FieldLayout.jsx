import './Field.css';
import { useSelector } from 'react-redux';

export const FieldLayout = ({ onClick }) => {
  const state = useSelector((state) => state.game);

  return (
    <div className="field">
      {state.field.map((cell, index) => (
        <button className={`cell-btn ${cell}`} key={index} onClick={() => onClick(index)}>
          {cell}
        </button>
      ))}
    </div>
  );
};
