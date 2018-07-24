import React from "react"

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

export default ListUsers