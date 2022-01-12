import React, { Component } from 'react';
import Post from './Post';

class BlogPosts extends Component {
    render() { 
        return (<div>
            {this.props.data1.posts.map((data,index)=><Post data={data} key={index}/>)} 
        </div>)
    }
}
 
export default BlogPosts;