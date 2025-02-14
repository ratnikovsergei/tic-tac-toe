import { Component } from 'react';
import { InformationLayout } from './InformationLayout';
import { connect } from 'react-redux';
export class InformationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let infoText = '';

    if (this.props.isDraw) {
      infoText = 'Увы, ничья';
    } else if (this.props.isGameEnded) {
      infoText = 'Игра окончена';
    } else if (this.props.currentPlayer === 'X') {
      infoText = 'Ходят крестики';
    } else {
      infoText = 'Ходят нолики';
    }

    return <InformationLayout infoText={infoText} />;
  }
}

const mapStateToProps = (state) => ({
  isDraw: state.game.isDraw,
  isGameEnded: state.game.isGameEnded,
  currentPlayer: state.game.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
