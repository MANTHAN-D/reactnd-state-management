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

  	render() {
    	return(
      		<div>
            	<h2>Video Game Dashboard</h2>
             	<div className="main-div">
             		//Add user div
             		<div className="add-user-div">
             			<AddUser />
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