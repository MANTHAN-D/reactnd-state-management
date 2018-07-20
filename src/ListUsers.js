import React from "react"

const ListUsers = (props) => {
  	return (
      	<ol>
      		{
              	props.users.map(user => (
        			<li key={user.userName}>{user.userName} played {user.gamesPlayed} games</li>
        		))
			}
        </ol>
    )
}

export default ListUsers