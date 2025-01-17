import './Game.css';
import { Information, Field } from './components';
import { store } from './store';

export const GameLayout = ({ onClick, reset }) => {
  const state = store.getState();

  return (
    <>
      <div className="game">
        <Information
          currentPlayer={state.currentPlayer}
          isGameEnded={state.isGameEnded}
          isDraw={state.isDraw}
        />
        <Field field={state.field} onClick={onClick} />
        <button className="reset-button" onClick={reset}>
          Играть сначала
        </button>
      </div>
    </>
  );
};
