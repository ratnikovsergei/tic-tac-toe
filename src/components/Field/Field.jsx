import { FieldLayout } from './FieldLayout';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from '../../actions';

export const Field = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game);

  const handleClick = (index) => {
    if (state.field[index] || state.isGameEnded) return;
    dispatch(setField(index));
  };

  return <FieldLayout onClick={handleClick} />;
};
