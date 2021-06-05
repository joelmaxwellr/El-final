import Actor from "./Actor";

const ActorList = ({ actores }) => {
  return (
    <div className="actors">
      {actores.map((actor, i) => (
        <Actor key={i} {...actor} />
      ))}
    </div>
  );
};

export default ActorList;
