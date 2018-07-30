import React from "react"
import PropTypes from "prop-types"

import MessageForm from "./MessageForm"
import MessageHistory from "./MessageHistory"

const ChatWindow = (props) => {
	return (
      		<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.username}</div>
			<MessageHistory username={props.username} messages={props.messages}/>
			<MessageForm onMessageSent={props.onMessageRecieved} sender={props.username}/>            
          </div>
      	)
}

ChatWindow.propTypes = { 
  username: PropTypes.string.isRequired,
  onMessageRecieved: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
}

export default ChatWindow;