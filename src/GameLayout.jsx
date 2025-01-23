import './Game.css';
import { Information, Field } from './components';

export const GameLayout = ({ reset }) => {
  return (
    <>
      <div className="game">
        <Information />
        <Field />
        <button className="reset-button" onClick={reset}>
          Играть сначала
        </button>
      </div>
    </>
  );
};
