import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  const navigate = useNavigate();
  const [isCatalogOpen, setCatalogOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isFavoritesOpen, setFavoritesOpen] = useState(false);

  const toggleCatalog = () => setCatalogOpen(!isCatalogOpen);
  const toggleCart = () => setCartOpen(!isCartOpen);
  const toggleFavorites = () => setFavoritesOpen(!isFavoritesOpen);

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
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
            onClick={toggleCatalog}
          >
            Catalogue
          </li>
          <li className="hover:text-gray-900 cursor-pointer" onClick={toggleCart}>
            Panier
          </li>
          <li
            className="hover:text-gray-900 cursor-pointer"
            onClick={toggleFavorites}
          >
            Favoris
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

      {isCatalogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 transform transition-transform duration-500 ease-out scale-95 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Catalogue
            </h2>
            <ul className="space-y-3 text-gray-700 text-center">
              {["Bottes et Bottines", "Chaussures de Sport", "Chaussures Habillées", "Chaussures pour Enfant", "Sandales et Tongs", "Sneakers"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-gray-900 cursor-pointer transition-colors duration-300 hover:font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={toggleCatalog}
              className="mt-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded w-full hover:scale-105 transform transition-transform duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 transform transition-transform duration-500 ease-out scale-95 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
              Votre Panier
            </h2>
            <p className="text-center text-gray-700">Votre panier est vide.</p>
            <button
              onClick={toggleCart}
              className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded w-full hover:scale-105 transform transition-transform duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      
      {isFavoritesOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 transform transition-transform duration-500 ease-out scale-95 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Vos Favoris
            </h2>
            <p className="text-center text-gray-700">Vous n'avez aucun favori pour le moment.</p>
            <button
              onClick={toggleFavorites}
              className="mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded w-full hover:scale-105 transform transition-transform duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
