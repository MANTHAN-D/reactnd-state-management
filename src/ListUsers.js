import React, { Component } from "react"
import PropTypes from "prop-types"

const HIDE_LABEL = "Hide the Number of Games Played";
const SHOW_LABEL = "Show the Number of Games Played";

class ListUsers extends Component {
  
  state = {
    showGamesPlayed: true,
    toggleButtonLabel: HIDE_LABEL
  }

	onButtonToggle = () => {
    	let toggleButtonLabel = this.state.showGamesPlayed ? SHOW_LABEL : HIDE_LABEL
      	this.setState({
   			showGamesPlayed: !this.state.showGamesPlayed,
          	toggleButtonLabel: toggleButtonLabel
        }); 
    }

  	render() {	
	  return (
	      	<div>
      			<h2>Active users list:</h2>
      			<ol>
    	  			{
	              		this.props.users.map(user => (
             				this.state.showGamesPlayed ? (
            					<li key={user.userName}>{user.userName} played {user.gamesPlayed} games</li>
            					) : (
                                <li key={user.userName}>{user.userName} played \* games</li>
                                )
        				))
					}
        		</ol>
				<div>
					<button id="toggle-games-played-button" onClick={this.onButtonToggle}>{this.state.toggleButtonLabel}</button>
				</div>
			</div>
    	)
	}
}

ListUsers.propTypes = {
	users: PropTypes.array.isRequired
}

export default ListUsers