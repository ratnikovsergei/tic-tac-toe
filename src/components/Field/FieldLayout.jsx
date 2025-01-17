import './Field.css';
import { store } from '../../store';

export const FieldLayout = ({ onClick }) => {
  const state = store.getState();

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
