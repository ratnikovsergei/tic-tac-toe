import './Information.css';
import { store } from '../../store';

export const InformationLayout = () => {
  const state = store.getState();

  let infoText = '';

  if (state.isDraw) {
    infoText = 'Увы, ничья :)';
  } else if (state.isGameEnded) {
    infoText = 'Игра окончена!';
  } else {
    if (state.currentPlayer === 'X') {
      infoText = 'Ходят крестики';
    } else {
      infoText = 'Ходят нолики';
    }
  }

  return (
    <div className="information">
      <h2>{infoText}</h2>
    </div>
  );
};
