import React, { Component } from "react"
import PropTypes from "prop-types"

class MessageForm extends Component{
  state = {
  	message: ''
  }

	/*
  	If the user did not type anything, he/she should not be
  	allowed to submit.
  	*/
	isDisabled = () => {
    	return this.state.message === ''
    }
	
	handleChange = event => {

      	const { name, value } = event.target;
      	this.setState({
        	[name]: value
        })
    }

	sendMessage = event => {
     event.preventDefault();	
      this.props.onMessageSent({
        	username: this.props.sender,
          	text: this.state.message
        }) 
      this.setState({
      	message: ''
      })
    }

	render() {
    	return(
      		<div>
              <form className="input-group" onSubmit={this.sendMessage}>
                <input type="text" className="form-control" placeholder="Enter your message..." name="message" value={this.state.message} onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
      	)
    }
}

MessageForm.propTypes = {
	onMessageSent: PropTypes.func.isRequired,
  	sender: PropTypes.string.isRequired
}

export default MessageForm