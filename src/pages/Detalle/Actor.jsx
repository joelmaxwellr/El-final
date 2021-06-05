const Actor = ({ character, name, profile_path }) => {
  return (
    <div className="actors">
      <div className="orderActors">
        <img className="imageActors" src={`https://image.tmdb.org/t/p/w200/${profile_path}`} />
        <h5>{name}</h5>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default Actor;
