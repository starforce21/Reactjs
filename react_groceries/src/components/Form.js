import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super()

        this.state = {  
            item: '',
            units: '',
            quantity: '',
            isPurchased: false
        }
    }

    handleChange = event => {
        
        if (event.target.id === 'item') {

            this.setState({ item: event.target.value })

        } else if (event.target.id === 'units') {

            this.setState({ units: event.target.value })

        } else {

            this.setState({ quantity: event.target.value })
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

                <label htmlFor="item">Item:</label>
                <input 
                    id="item"
                    onChange={this.handleChange}
                    value={this.state.item}
                />

                <label htmlFor="units">Units:</label>
                <input 
                    id="units" 
                    onChange={this.handleChange}
                    value={this.state.units} 
                    type="units"
                />

                <label htmlFor="quantity">Quantity:</label>
                <input 
                    id="quantity" 
                    onChange={this.handleChange} 
                    value={this.state.quantity}
                    type="quantity"
                />

                <button>Submit</button>

            </form>
        );
    }
}
 
export default Form;