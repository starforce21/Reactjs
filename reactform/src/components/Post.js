import React, { Component } from 'react';



class Post extends Component {
    render() { 
        console.log(this.props)
        return (
        <div>
            {this.props.data.title}
            {this.props.data.body}
            {this.props.data.username}
        </div>
        )
        
    }
}
 
export default Post;