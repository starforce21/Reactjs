import React, { Component } from 'react';
import Item from './Item';
class List extends Component {

    render() { 
        return <div id="flex">
            {this.props.data.groceries.map((data,index)=><Item data={data} key={index}/>)}
        </div>;
    }
}
 
export default List;