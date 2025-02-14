import { connect } from 'react-redux';
import { GameLayout } from './GameLayout';
import { restartGame } from './actions';
import { Component } from 'react';
export class GameContainer extends Component {
  constructor(props) {
    super(props);
  }

  restartGame() {
    this.props.restartGame();
  }

  render() {
    return <GameLayout restartGame={this.restartGame.bind(this)} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    restartGame: () => dispatch(restartGame),
  };
};

export const Game = connect(null, mapDispatchToProps)(GameContainer);
