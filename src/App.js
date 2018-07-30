import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
  	messages: []
  }

  
  messageRecieved = message => {
    this.setState({
        messages: this.state.messages.concat(message)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    		<ChatWindow messages={this.state.messages} username="Amy" onMessageRecieved={this.messageRecieved}/>
			<ChatWindow messages={this.state.messages} username="John" onMessageRecieved={this.messageRecieved}/>
        </div>
      </div>
    );
  }
}

export default App;
