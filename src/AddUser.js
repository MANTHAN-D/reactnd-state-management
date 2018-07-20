import React, {Component} from "react"

class AddUser extends Component {
  	state = {
     	userName: null,
      	firstName: null,
      	lastName: null,
      	gamesPlayed: 0,
      	error: null
    }

	updateState = (event) => {
      	let property = event.target.id;
      	this.setState({
        	property: event.target.value
        })
    }

	allowAddUser = () => {
     return (this.state.userName && this.state.firstName && this.state.lastName) 
    }

	render() {
     	return(
      		<div>
             	<div>
 	            	<input type="text" id="userName" placeholder="Username" value={this.state.userName} onChange={this.updateState}/>
             	</div>
             	<div>
					<input type="text" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.updateState}/>
             	</div>
             	<div>
             		<input type="text" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.updateState}/>
             	</div>
             	<div className="error">{this.state.error}</div>
             	<div>
   	          		<button disabled={this.allowAddUser()}>Add User</button>
      			</div>
             </div>
      	) 
    }
}
export default AddUser