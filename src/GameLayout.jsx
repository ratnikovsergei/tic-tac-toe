import { Component } from 'react';
import { Information, Field } from './components';
export class GameLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col max-w-[250px] m-auto items-center mt-5 bg-gray-50 rounded-2xl p-5">
        <Information />
        <Field />
        <button
          className="mt-2.5 bg-sky-500 hover:bg-sky-700 cursor-pointer rounded-full text-[10px] font-bold text-white p-1 shadow-md shadow-sky-500/50"
          onClick={this.props.restartGame}
        >
          Играть сначала
        </button>
      </div>
    );
  }
}
