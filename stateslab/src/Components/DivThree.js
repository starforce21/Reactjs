import React, { Component } from "react";
class DivOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: props.cde,
    };
    this.onClick = this.props.onClick;
  }
  render() {
    return (
      <div>
        <h3 onClick={() => this.onClick(this, this.state.tardis.name)}>{this.state.tardis.name}
        </h3>
      </div>
    );
  }
}
export default DivOne;
