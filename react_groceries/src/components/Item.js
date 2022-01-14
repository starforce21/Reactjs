import React, { Component } from "react";
import Display from "./Conditional";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        groceries: {
          item: this.props.data.item,
          units: this.props.data.units,
          quantity: this.props.data.quantity,
          isPurchased: this.props.data.isPurchased,
          num: 1
        }
      }
  }
  Removed = () => {
    this.setState({ groceries: {...this.state.groceries,isPurchased: true } }, () =>
      console.log(this.state)
    );
  };
  Later = () => {
    this.setState({groceries: {...this.state.groceries, num:2 }},() =>
    console.log(this.state))
  };

  render() {
    return (
      <div>
        {this.state.groceries.isPurchased ? (
          <div />
        ) : (
          <Display Removed={this.Removed} Later={this.Later} data={this.state.groceries}/>
        )}
      </div>
    );
  }
}

export default Item;
