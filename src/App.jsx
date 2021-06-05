import React, { useState, useEffect } from "react";
import Principal from "./pages/Principal/Principal";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import secret_key from "./secret";
import FormSearch from "./shared/FormSearch";
import Detalle from "./pages/Detalle/Detalle";
import Favoritos from "./pages/Favoritos/Favoritos";
import Navbar from "./Banner/Navbar";
import Banner from "./Banner/Banner";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [textToSearch, setTextToSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${secret_key}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => setMovies([...data.results]));
    console.log("useEffect");
  }, [favoritos]);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${secret_key}&query=${textToSearch}`
    )
      .then((response) => response.json())
      .then((data) => setMovies([...data.results]));
  };

  const handleFavorites = (id) => {
    const favorito = movies.filter((movie) => movie.id == id);
    setFavoritos([...favoritos, ...favorito]);
    console.log(favoritos);
  };

  const handleChange = (e) => {
    setTextToSearch(e.target.value);
    console.log(textToSearch);
  };

  return (
    <>
    <Navbar />
        <Banner />
      <Router>
       
        <Route path="/" exact>
        
          <FormSearch  onSubmit={onSubmit} onChange={handleChange} />
          <Principal movies={movies} onAddFavorite={handleFavorites} />
        </Route>
        <Route path="/detalle/:id">
          <Detalle />
        </Route>
        <Route path="/favoritos">
          <Favoritos favoritos={favoritos} />
        </Route>
      </Router>
    </>
  );
};

export default App 
