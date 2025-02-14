import { Component } from 'react';

export class InformationLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-center mb-4">
        <span className="text-2xl font-bold">{this.props.infoText}</span>
      </div>
    );
  }
}
