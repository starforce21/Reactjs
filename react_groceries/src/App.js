import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

let arr = [
  {
    item: "Baguette",
    units: "Loaf",
    quantity: "2",
    isPurchased: false,
  },
  {
    item: "Ham",
    units: "lbs",
    quantity: "1",
    isPurchased: false,
  },
  {
    item: "cheese",
    units: "lbs",
    quantity: ".5",
    isPurchased: false,
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: arr,
    };
  }
  getData = (data) => {
    this.setState({ groceries: [...this.state.groceries, data] }, () =>
      console.log(data)
    );
  };

  render() {
    return (
      <div>
        <Form getData={this.getData} />
        <List data={this.state} />
      </div>
    );
  }
}

export default App;
