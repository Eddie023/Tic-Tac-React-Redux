import { connect } from "react-redux";

// import TodoListUI from "./todoListUI";
import { addSign, GameStatus, resetGame } from "../actions/ticktacActions";

import Square from "../components/Square";
import React from "react";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      box: []
    };
  }

  calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        let winningIndex = { a, b, c };

        return { sign: squares[a], winningIndex };
      }
    }
    return false;
  };

  renderSquare(i) {
    return (
      <Square
        index={i}
        value={this.props.squares[i]}
        setValue={this.props.setValue}
        winningIndex={this.calculateWinner(this.props.squares).winningIndex}
      />
    );
  }

  checkGameStatus = () => {
    if (this.props.GameOver) {
      console.log("ok");
    }
    const winner = this.calculateWinner(this.props.squares).sign;

    let status;
    if (winner) {
      this.props.gameOver();

      return (
        <div>
          <div>{(status = "Winner: " + winner)}</div>
          <button
            onClick={() => {
              this.props.resetGame();
            }}
          >
            Restart
          </button>
        </div>
      );
    } else {
      return (status = "Next player: " + (this.props.xIsNext ? "X" : "O"));
    }
  };

  render() {
    let status = this.checkGameStatus();
    return (
      <div className="main-wrapper">
        <div className="header">TIC-TAC-TOE</div>

        <div className="status">{status}</div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    squares: state.squares,
    xIsNext: state.xIsNext,
    GameOver: state.GameOver
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: value => dispatch(addSign(value)),
    gameOver: () => dispatch(GameStatus()),
    resetGame: () => dispatch(resetGame())
    // setValue: value => console.log(value)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
