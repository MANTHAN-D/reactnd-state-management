import React from "react"
import PropTypes from "prop-types"

const ListUsers = (props) => {
  	return (
      	<div>
      		<div>Active users list:</div>
      		<ol>
      			{
              		props.users.map(user => (
        				<li key={user.userName}>{user.userName} played {user.gamesPlayed} games</li>
        			))
				}
        	</ol>
		</div>
    )
}

ListUsers.propTypes = {
	users: PropTypes.array.isRequired
}

export default ListUsers