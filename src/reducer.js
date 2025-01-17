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

const checkWinner = (field) => {
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return WIN_PATTERNS.some((pattern) => {
    const [a, b, c] = pattern;
    return field[a] && field[a] === field[b] && field[a] === field[c];
  });
};
