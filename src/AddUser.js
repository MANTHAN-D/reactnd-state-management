import React, {Component} from "react"

class AddUser extends Component {
  	
  	state = {
     	userName: '',
      	firstName: '',
      	lastName: '',
      	gamesPlayed: 0,
      	error: null
    }

	updateState = (event) => {
      	this.setState({
        	[event.target.id]: event.target.value
        }, () => {
			document.getElementById("add-user-button").disabled = !this.allowAddUser();
        })
    }

	allowAddUser = () => {
     return (this.state.userName && this.state.firstName && this.state.lastName) 
    }

	addUser = () => {
      alert("Monty");
      this.props.addUser({
      		userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gamesPlayed: 0
      });
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
   	          		<button id="add-user-button" disabled onClick={this.addUser}>Add User</button>
      			</div>
             </div>
      	) 
    }
}
export default AddUser