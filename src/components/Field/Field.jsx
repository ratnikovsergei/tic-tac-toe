import { FieldLayout } from './FieldLayout';
import { store } from '../../store';

export const Field = ({ onClick }) => {
  const state = store.getState();

  return <FieldLayout field={state.field} onClick={onClick} />;
};
