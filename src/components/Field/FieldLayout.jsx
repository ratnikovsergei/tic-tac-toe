import { connect } from 'react-redux';
import { Component } from 'react';

export class FieldLayoutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grid grid-cols-3 gap-1">
        {this.props.field.map((cell, index) => (
          <button
            className="w-[50px] h-[50px] text-[36px] bg-blue-200 hover:bg-blue-300 rounded-[10px]"
            key={index}
            onClick={() => this.props.onClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.game.field,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
