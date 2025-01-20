import { InformationLayout } from './InformationLayout';
import { store } from '../../store';

export const Information = () => {
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

  return <InformationLayout infoText={infoText} />;
};
