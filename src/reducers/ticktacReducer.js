import { ADD_SIGN, GAME_OVER, RESTART_GAME } from "../actions/ticktacActions";

const INITIAL_STATE = {
  squares: Array(9).fill(null),
  xIsNext: true,
  GameOver: false
};

const tictacReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SIGN:
      const temp = state.squares.slice();
      if (state.GameOver) {
        return state;
      }

      if (
        temp[action.payload.index] === "X" ||
        temp[action.payload.index] === "O"
      ) {
        return state;
      }
      temp[action.payload.index] = state.xIsNext ? "X" : "O";
      return { ...state, squares: temp, xIsNext: !state.xIsNext };

    case GAME_OVER:
      return { ...state, GameOver: true };

    case RESTART_GAME:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default tictacReducer;
