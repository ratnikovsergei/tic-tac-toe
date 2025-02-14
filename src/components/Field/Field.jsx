import { connect } from 'react-redux';
import { setField } from '../../actions';
import { FieldLayout } from './FieldLayout';
import { Component } from 'react';
export class FieldContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(index) {
    if (this.props.field[index] || this.props.isGameEnded) return;
    this.props.setField(index);
  }

  render() {
    return <FieldLayout onClick={this.handleClick.bind(this)} />;
  }
}

const mapStateToProps = (state) => ({
  field: state.game.field,
  isGameEnded: state.game.isGameEnded,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setField: (index) => dispatch(setField(index)),
  };
};

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
