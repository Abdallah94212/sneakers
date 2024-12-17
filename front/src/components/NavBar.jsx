import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  const navigate = useNavigate();
  const [isCatalogOpen, setCatalogOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  // Fonctions de bascule
  const toggleCatalog = () => setCatalogOpen(!isCatalogOpen);
  const toggleLogin = () => setLoginOpen(!isLoginOpen);

  return (
    <div>
      {/* Barre de navigation */}
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
          <li className="hover:text-gray-900 cursor-pointer">Panier</li>
          <li className="hover:text-gray-900 cursor-pointer">Favoris</li>
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLogin}
            className="text-gray-700 hover:text-gray-900"
          >
            LOG IN
          </button>
          <button
            onClick={toggleLogin}
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            SIGN IN
          </button>
        </div>
      </nav>

      {/* Pop-in Catalogue avec animation */}
      {isCatalogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 transform transition-transform duration-500 ease-out scale-95 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Catalogue
            </h2>
            <ul className="space-y-3 text-gray-700 text-center">
              {[
                "Bottes et Bottines",
                "Chaussures de Sport",
                "Chaussures Habillées",
                "Chaussures pour Enfant",
                "Sandales et Tongs",
                "Sneakers",
              ].map((item, index) => (
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

      {/* Pop-in Login */}
      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 transform transition-transform duration-500 ease-out scale-95 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              Connexion
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  placeholder="Votre mot de passe"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 rounded hover:scale-105 transform transition-transform duration-300"
              >
                Se Connecter
              </button>
            </form>
            <button
              onClick={toggleLogin}
              className="mt-4 text-gray-500 hover:text-gray-700 w-full"
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
