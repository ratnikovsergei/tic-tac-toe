import './Game.css';
import { Information, Field } from './components';
import { store } from './store';

export const GameLayout = ({ handleClick, reset }) => {
  const state = store.getState();

  return (
    <>
      <div className="game">
        <Information />
        <Field onClick={handleClick} />
        <button className="reset-button" onClick={reset}>
          Играть сначала
        </button>
      </div>
    </>
  );
};
