import React, { Component } from 'react'
import ItemList from './ItemList';
import DeleteItem from './DeleteItem';
import CreateItem from './CreateItem';

class ShoppingCart extends Component {
  
  state = {
    items: [],
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

	render() {
      	return (
      		
      		<div>
     		<CreateItem addItem={this.addItem}/>

      		<DeleteItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} />

			<ItemList items={this.state.items}/> 
		</div>
      	)
    }
  
}

export default ShoppingCart