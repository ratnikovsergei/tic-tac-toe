import { useState, useEffect } from 'react';
import GameLayout from './GameLayout';
import { store } from './store';

export default Game = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return unsubscribe;
  }, []);

  const handleClick = (index) => {
    if (state.field[index] || state.isGameEnded) return;
    store.dispatch({ type: 'SET_FIELD', payload: { index } });
  };

  const restartGame = () => {
    store.dispatch({ type: 'RESTART_GAME' });
  };

  return (
    <>
      <GameLayout
        field={state.field}
        reset={restartGame}
        onClick={handleClick}
        currentPlayer={state.currentPlayer}
        isGameEnded={state.isGameEnded}
        isDraw={state.isDraw}
      />
    </>
  );
};
