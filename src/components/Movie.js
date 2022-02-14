import React from "react";
import {Link} from "react-router-dom";
function Movie({item}) {
    return (
    <div key={item.id}>
    <img src={item.medium_cover_image}/>
    <h2><Link to={`${process.env.PUBLIC_URL}/movie/${item.id}`}>{item.title}</Link> ({item.year})</h2>
    <p>{item.summary}</p>
    <ul>
      {item.genres ? item.genres.map(g=><li key={g}>{g}</li>) : console.log("doesn't have g") }
    </ul>
  </div>
  );
}

export default Movie;