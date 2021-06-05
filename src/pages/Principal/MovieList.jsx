import Movie from "./Movie";
const MovieList = ({ movies, onAddFavorite, titulo }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <div className="row">

        {movies.map((movie, i) => (
          <Movie key={i} {...movie} onAddFavorite={onAddFavorite} />
        ))}

        
      </div>
    </div>
  );
};

export default MovieList;
