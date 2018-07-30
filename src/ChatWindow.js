import React from "react"
import PropTypes from "prop-types"

import MessageForm from "./MessageForm"

const ChatWindow = (props) => {
	return (
      		<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.username}</div>

            <ul className="message-list">
              {props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === props.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

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