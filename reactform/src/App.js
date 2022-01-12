import BlogPosts from "./components/BlogPosts";
import Form from "./components/Form";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  getData = (infoFromForm) => {
      // this.setState({posts:this.state.posts.concat(post)})
      // console.log(this.state)
      let arr=this.state.posts.slice()
      arr.push(infoFromForm)
      this.setState({posts:arr},()=>console.log(this.state))
  };
  render() {
    return (
      <div>
        <Form x={this.state} getData={this.getData}/>
        <BlogPosts data1={this.state} /> 
      </div>
    );
  }
}
export default App;
