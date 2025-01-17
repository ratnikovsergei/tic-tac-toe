import { InformationLayout } from './InformationLayout';
import { store } from '../../store';

export const Information = () => {
  const state = store.getState();

  return (
    <InformationLayout
      currentPlayer={state.currentPlayer}
      isGameEnded={state.isGameEnded}
      isDraw={state.isDraw}
    />
  );
};
