import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div id={"itemlist"+this.props.data.num}>
        <p>Item: {this.props.data.item}</p>
        <p>Units: {this.props.data.units}</p>
        <p>Quantity: {this.props.data.quantity}</p>
        <p>Purchased: {"" + this.props.data.isPurchased}</p>
        <button onClick={this.props.Removed}>Purchased</button>
        <button onClick={this.props.Later}>Later</button>
      </div>
    );
  }
}

export default Display;
