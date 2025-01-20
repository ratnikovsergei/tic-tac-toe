import { useState, useEffect } from 'react';
import { GameLayout } from './GameLayout';
import { store } from './store';

export const Game = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return unsubscribe;
  }, []);

  const restartGame = () => {
    store.dispatch({ type: 'RESTART_GAME' });
  };

  return (
    <>
      <GameLayout reset={restartGame} />
    </>
  );
};
