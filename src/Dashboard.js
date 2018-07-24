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
      this.setState((prevState) => {
      	return {
         users: prevState.users.push(user) 
        }
      })
    }

  	render() {
    	return(
      		<div>
            	<span>Video Game Dashboard</span>
             	<div className="main-div">
             		//Add user div
             		<div className="add-user-div">
             			<AddUser addUser={this.addUserCallback}/>
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