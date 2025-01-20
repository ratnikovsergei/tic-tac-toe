import { FieldLayout } from './FieldLayout';
import { store } from '../../store';

export const Field = () => {
  const state = store.getState();
  const handleClick = (index) => {
    if (state.field[index] || state.isGameEnded) return;
    store.dispatch({ type: 'SET_FIELD', payload: { index } });
  };

  return <FieldLayout onClick={handleClick} />;
};
