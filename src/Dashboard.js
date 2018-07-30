import React, { Component } from "react"
import "./dashboard.css"

import AddUser from "./AddUser"
import ListUsers from "./ListUsers"

class Dashboard extends Component{
  
  	state = {
  		users: [
          {
          	userName: "monty",
            firstName: "Albert",
            lastName: "Pinto",
            gamesPlayed: 3
          }
        ]
  	}

	addUserCallback = (user) => {
      this.setState({
        users: this.state.users.concat(user)
      })
    }

	isUserNameAvailable = (userName) => {
      if (this.state.users.filter(user => user.userName === userName).length > 0)
          return false;
      else
          return true;
    }

  	render() {
    	return(
      		<div>
            	<span>Video Game Dashboard</span>
             	<div className="main-div">
             		//Add user div
             		<div className="add-user-div">
             			<AddUser onAddUser={this.addUserCallback} isUserNameAvailable={this.isUserNameAvailable}/>
             		</div>
             		//List User div
             		<div className="list-user-div">
             			<ListUsers users={this.state.users} />
             		</div>
				</div>
            </div>
      	)
    }
}

export default Dashboard