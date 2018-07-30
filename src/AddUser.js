import React, {Component} from "react"
import PropTypes from "prop-types"

class AddUser extends Component {
  	
  	state = {
     	user: {
          	userName: '',
        	firstName: '',
          	lastName: '',
	      	gamesPlayed: 0
        },
      	error: null
    }

	handleInputChange = event => {
      
	    const { name, value } = event.target;
      	this.setState(currState => ({
        	user: {
    	      ...currState.user,
              [name]: value
        	},
          	error: null
        }))
    }

	isDisabled = () => {
     return !(this.state.user.userName && this.state.user.firstName && this.state.user.lastName) 
    }

	handleSubmit = event => {
      event.preventDefault();
      if(this.props.isUserNameAvailable(this.state.user.userName)){
        this.props.onAddUser(this.state.user);
      }
      else{
      	this.setState({
          error: "Username already exists! Please use other username"
        })
      }
    }

	render() {
     	return(
      		<div>
             	<form onSubmit={this.handleSubmit}>
             		<div>
 	            		<input type="text" name="userName" placeholder="Username" value={this.state.user.userName} onChange=					{this.handleInputChange}/>
             		</div>
             		<div>
						<input type="text" name="firstName" placeholder="First Name" value={this.state.user.firstName} onChange={this.handleInputChange}/>
             		</div>
             		<div>
	             		<input type="text" name="lastName" placeholder="Last Name" value={this.state.user.lastName} onChange={this.handleInputChange}/>
    	         	</div>
        	     	<div className="error">{this.state.error}</div>
            	 	<div>
   	          			<button id="add-user-button" disabled={this.isDisabled()}>Add User</button>
      				</div>
				</form>
             </div>
      	) 
    }
}

AddUser.propTypes = {
	onAddUser: PropTypes.func.isRequired,
  	isUserNameAvailable: PropTypes.func.isRequired
}

export default AddUser