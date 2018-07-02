import React, { Component } from "react"

class ListMoviePopularity extends Component {

  getListOfUsers = movie => {
	return this.props.profiles.filter( profile => {
      return parseInt(profile.favoriteMovieID, 10) === movie.id
    })
  }

  render() {
   return (
   	<div>
    {
     	Object.values(this.props.movies).map(movie => (
    		<div key={movie.id} style={{paddingLeft: 15}}>
    		<h2>{movie.name}</h2>
			{
				this.getListOfUsers(movie).length > 0 ? 
				(
					<div style={{paddingLeft: 15}}>
              			<p>Liked By:</p>
              			<ul>
              				{this.getListOfUsers(movie).map(profile => (
                				<li key={profile.userID}>{this.props.users[profile.userID].name}</li>
                			))}
              			</ul>
              		</div>
				) : 
				(
					<p>None of the current users liked this movie</p>
				)
			}
			</div>
        ))
	}
     </div>
   ) 
  }
}

export default ListMoviePopularity