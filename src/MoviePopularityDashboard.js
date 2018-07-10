import React, { Component } from "react"
import MoviePopularity from "./MoviePopularity"

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class MoviePopularityDashboard extends Component {

  render() {
   return (
   	<div>
    {
     	Object.values(movies).map(movie => (
    		<MoviePopularity key={movie.id} movie={movie} />
        ))
	}
     </div>
   ) 
  }
}

export default MoviePopularityDashboard