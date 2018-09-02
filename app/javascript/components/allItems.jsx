 import React, { Component } from 'react';
 import $ from 'jquery'; 
 class AllItems extends Component {
     state = {       
        items: []  
    }
   
   componentDidMount() {
    $.getJSON('/api/v1/items.json', 
    (response) => { this.setState({ items: response }) });
   
   }
   
   
   render() {
    var items= this.state.items.map((item, i ) => {
        return (
            <div key = { i}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
        )
    });

    return (
      <div>
            {items}
        </div>
    )
    }  
 }
 export default AllItems;