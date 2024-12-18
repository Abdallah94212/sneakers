import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    if (!favorites.some((fav) => fav.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div>
      <NavBar
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
      <Home addToFavorites={addToFavorites} />
    </div>
  );
};

export default App;