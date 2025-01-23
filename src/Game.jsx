import { useDispatch } from 'react-redux';
import { GameLayout } from './GameLayout';
import { restartGame } from './actions';

export const Game = () => {
  const dispatch = useDispatch();
  const handleRestartGame = () => {
    dispatch(restartGame);
  };

  return <GameLayout reset={handleRestartGame} />;
};
