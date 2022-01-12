import React, { Component } from "react";
import Divtwo from "./DivTwo";
class DivOne extends Component {
  render() {
    return (
      <div>
        <Divtwo onClick={this.props.onClick} bcd={this.props.abc} />
      </div>
    );
  }
}
export default DivOne;
