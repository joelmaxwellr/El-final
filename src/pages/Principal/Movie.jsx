import { Link } from "react-router-dom";
import "./movie.css"

const Movie = ({ id, title, vote_average, poster_path, release_date, onAddFavorite }) => {
  return (
    <div className="posters">
      <Link to={`/detalle/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
      </Link>
      <button onClick={()=>{onAddFavorite(id)}}>Add to favorites </button>
      <h5>{vote_average}</h5>
      {/* <h4>{title}</h4> */}
      <p>{release_date}</p>
      
    </div>
  );
};

export default Movie;
