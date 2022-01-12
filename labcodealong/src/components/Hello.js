import React, { Component} from "react";

class Hello extends Component
{   
    constructor() {
        super()
        this.state={
            message: 'Hello User'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Real people'
        })
    }
    render()
    {
        return(
            <div>
                <h2><center> Hello {this.props.name}</center></h2>
                <h4><center> Hello {this.state.message}</center></h4>
                <button onClick={()=> this.changeMessage()}>click this</button>
            </div>
        )
    }
}

export default Hello