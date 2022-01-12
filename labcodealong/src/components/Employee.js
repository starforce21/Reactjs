import React, { Component} from "react";

class Employee extends Component
{
    render()
    {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.dept}</td>
                <td>${this.props.salary}</td>
            </tr>
        )
    }
}

export default Employee