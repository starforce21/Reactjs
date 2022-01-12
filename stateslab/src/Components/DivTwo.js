import React, { Component } from "react";
import DivThree from "./DivThree";
class DivOne extends Component {
  render() {
    return (
      <div>
        <DivThree onClick={this.props.onClick} cde={this.props.bcd} />
        <DivThree onClick={this.props.onClick} cde={this.props.bcd} />
      </div>
    );
  }
}
export default DivOne;
