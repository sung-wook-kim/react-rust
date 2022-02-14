import Movie from "../components/Movie";
import React, {useState ,useEffect} from "react";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await ( await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year")).json();
      setMovies(json.data.movies);
      setLoading(false);
  };
 
  useEffect(()=>{
    getMovies();
  },[]);
  
  return (
    <div> 
      {loading ? <h1>Loading . . .</h1> : 
        movies.map(item => 
          <Movie key = {item.id} item={item}/>
        )
      }
    </div>
  );
}

export default Home;