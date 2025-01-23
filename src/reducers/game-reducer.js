import { checkWinner } from '../utils/utils';

export const initialState = {
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  field: Array(9).fill(''),
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      const newField = [...state.field];
      newField[action.payload.index] = state.currentPlayer;
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
      return { ...initialState };

    default:
      return state;
  }
};
