import React, { Component } from "react";
import DivOne from "./DivOne";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      tardis: {
        name: "Time and Relative Dimension in Space",
        caps: false,
      },
    };
  }
  changeIt = (that, text) => {
    if (that.state.tardis.caps) {
      that.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false,
        },
      });
    } else {
      that.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true,
        },
      });
    }
  };

  render() {
    return <DivOne onClick={this.changeIt} abc={this.state.tardis} />;
  }
}
export default Display;
