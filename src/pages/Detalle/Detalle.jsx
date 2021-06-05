import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detalle.css"

import ActorList from "./ActorList";
import MovieDetail from "./MovieDetail";
import secret_key from "../../secret";
import axios from "axios";

const Detalle = () => {
  const [movie, setMovie] = useState({});
  const [actores, setActores] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${secret_key}`)
      //  .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie({ ...data.data });
        getActorsByMovieId();
      });
    console.log(`Este es el id: ${id}`);
  }, []);

  const getActorsByMovieId = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${secret_key}`
    )
      .then((response) => response.json())
      .then((data) => setActores([...data.cast.slice(0, 5)]));
  };

  return (
    
      <div className="contenedor container2">
        <MovieDetail {...movie} />
        <ActorList actores={actores} />
      </div>
   
  );
};

export default Detalle;
