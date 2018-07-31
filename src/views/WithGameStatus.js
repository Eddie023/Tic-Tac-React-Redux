import React from "react";
import { connect } from "react-redux";
import Board from "./Board";

class GameStatus extends React.Component {
  render() {
    // console.log(this.props.GameOver);
    return this.props.GameOver ? <p>ok</p> : <Board />;
  }
}

// export default withGameStatus;

const mapStateToProps = state => {
  return {
    squares: state.squares,
    GameOver: state.GameOver
  };
};

export default connect(mapStateToProps)(GameStatus);
