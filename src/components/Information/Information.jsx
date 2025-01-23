import { InformationLayout } from './InformationLayout';
import { useSelector } from 'react-redux';

export const Information = () => {
  const state = useSelector((state) => state.game);
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
