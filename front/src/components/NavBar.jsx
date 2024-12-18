import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = ({ favorites, removeFromFavorites }) => {
  const navigate = useNavigate();
  const [isFavoritesOpen, setFavoritesOpen] = useState(false);
  const toggleFavorites = () => setFavoritesOpen(!isFavoritesOpen);

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold">Sneakers</span>
          <span className="text-gray-500">pour tous</span>
        </div>

        <ul className="flex space-x-6 text-gray-700">
          <li
            className="hover:text-gray-900 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Accueil
          </li>
          <li
            className="hover:text-gray-900 cursor-pointer"
            onClick={() => navigate("/catalogue")}
          >
            Catalogue
          </li>
          <li
            className="hover:text-gray-900 cursor-pointer"
            onClick={toggleFavorites}
          >
            Favoris ({favorites.length})
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-700 hover:text-gray-900"
          >
            LOG IN
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            SIGN IN
          </button>
        </div>
      </nav>

      {isFavoritesOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Vos Favoris
            </h2>

            {favorites.length > 0 ? (
              <ul className="space-y-3">
                {favorites.map((fav) => (
                  <li key={fav.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src={fav.image}
                        alt={fav.name}
                        className="h-12 w-12 object-cover rounded"
                      />
                      <span>{fav.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{fav.prix}$</span>
                      <button
                        onClick={() => removeFromFavorites(fav.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Supprimer
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-700">
                Aucun favori ajouté.
              </p>
            )}

            <button
              onClick={toggleFavorites}
              className="mt-4 w-full bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded hover:scale-105 transform transition-transform"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;