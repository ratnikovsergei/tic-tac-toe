import { checkWinner } from './utils/utils';

const initialState = {
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  field: Array(9).fill(''),
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_PLAYER':
      return {
        ...state,
        currentPlayer: payload,
      };
    case 'SET_FIELD':
      const newField = [...state.field];
      newField[payload.index] = state.currentPlayer;
      const isGameEnded = checkWinner(newField);
      const isDraw = newField.every((cell) => cell);
      return {
        ...state,
        field: newField,
        isGameEnded,
        isDraw,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    case 'RESTART_GAME':
      return initialState;
    default:
      return state;
  }
};
