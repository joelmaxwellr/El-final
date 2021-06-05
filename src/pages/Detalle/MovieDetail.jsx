const MovieDetail = ({
  genres,
  title,
  vote_average,
  poster_path,
  release_date,
  overview,
  backdrop_path,
}) => {
  return (
    <div >
    
      <div>
      <div className=""></div>
      <img className="" src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
      
    <div >
    
        <label class="titulo" >
            <h2>{title}</h2>

        </label>
        <p>
        {overview}
<br />
            <label>Release Date: <i> {release_date}</i></label>
            <br />
            <span> <h3>Vote: <i>{vote_average}</i>  </h3></span>

             </p>
    </div>
    <div class="btn-close">x</div>
      </div>

    </div>

  );
};

export default MovieDetail;
