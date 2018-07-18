import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CreateItem extends Component{
  
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

inputIsEmpty = () => {
    return this.state.value === '';
  };

	render() {
     return (
      	<form onSubmit={this.props.addItem}>
          	<input
            	type="text"
 	           	placeholder="Enter New Item"
    	        value={this.state.value}
        	    onChange={this.handleChange}
          	/>
          	<button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      ) 
    }
}

CreateItem.propTypes = {
 addItem: PropTypes.func.isRequired 
}

export default CreateItem