import React from "react"
import UserList from "./UserList"

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const MoviePopularity = props => {
  
  const getListOfUsers = movie => {
	return profiles.filter( profile => {
      return parseInt(profile.favoriteMovieID, 10) === movie.id
    })
  }
  
  return (
    <div key={props.movie.id} style={{paddingLeft: 15}}>
    	<h2>{props.movie.name}</h2>
		{
			getListOfUsers(props.movie).length > 0 ? 
			(
				<div style={{paddingLeft: 15}}>
              		<p>Liked By:</p>
					<UserList userWhoLikedList={getListOfUsers(props.movie)}/>
              	</div>
			) : 
			(
				<p>None of the current users liked this movie</p>
			)
		}
	</div>
  )
}
export default MoviePopularity