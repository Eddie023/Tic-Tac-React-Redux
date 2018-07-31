export const ADD_SIGN = "ADD_SIGN";
export const GAME_OVER = "GAME_OVER";
export const RESTART_GAME = "RESTART_GAME";

export const addSign = index => ({
  type: ADD_SIGN,
  payload: {
    index: index,
    xIsNext: true
  }
});

export const GameStatus = () => ({
  type: GAME_OVER
});

export const resetGame = () => ({
  type: RESTART_GAME
});
