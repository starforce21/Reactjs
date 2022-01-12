import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super()

        this.state = {  
            title: '',
            body: '',
            username: '',
            submitted: false
        }
    }

    handleChange = event => {
        
        if (event.target.id === 'title') {

            this.setState({ title: event.target.value })

        } else if (event.target.id === 'body') {

            this.setState({ body: event.target.value })

        } else {

            this.setState({ username: event.target.value })
        }

        // Computed property name

        // this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {      ///    onClick ... onChange ... onSubmit
        event.preventDefault()
        this.props.getData(this.state)
        // this.props.x.posts.push(this.state)
        // console.log(this.props.x.posts)
    }

    render() { 
  
        return (  
            <form onSubmit={this.handleSubmit} className='cf'>

                <label htmlFor="title">title:</label>
                <input 
                    id="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                />

                <label htmlFor="body">body:</label>
                <input 
                    id="body" 
                    onChange={this.handleChange}
                    value={this.state.body} 
                    type="body"
                />

                <label htmlFor="username">username:</label>
                <input 
                    id="username" 
                    onChange={this.handleChange} 
                    value={this.state.username}
                    type="username"
                />

                <button>Submit</button>

            </form>
        );
    }
}
 
export default Form;