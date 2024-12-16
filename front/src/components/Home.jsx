import React, { useEffect } from 'react';

const Home = () => {
    const [articles, setArticles] = useState([]);

    // Appel API pour récupérer les articles
    useEffect(() => {
      fetch('http://localhost:1337/api/articles')
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.data); // Assure-toi que les articles sont bien dans data.data
        })
        .catch((error) => console.error('Erreur lors du fetch des articles:', error));
    }, []); 

    return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-black text-white py-16 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue sur Sneakers Pour Vous</h1>
        <p className="text-lg md:text-2xl mb-8">Les meilleures sneakers, choisies pour vous.</p>
        <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded hover:bg-gray-300">
          Explorer Maintenant
        </button>
      </div>

      {/* Section Présentation */}
      <div className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Notre Sélection Premium</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Découvrez des paires iconiques des plus grandes marques comme Nike, Adidas, Louis Vuitton, Dior et bien plus encore.
        </p>
      </div>

      {/* Section Produits */}
      <div className="py-12 px-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Nos Dernières Arrivées</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Exemple de Produit */}
          <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/200"
              alt="Sneaker"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h4 className="text-lg font-bold">Sneaker Nom</h4>
            <p className="text-gray-500">Description rapide de la paire.</p>
            <p className="text-gray-800 font-semibold mt-2">$199</p>
          </div>

          {/* Répéter d'autres cartes produits si besoin */}
          <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
            <img
              src=""
              alt="Sneaker"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h4 className="text-lg font-bold">Sneaker Nom</h4>
            <p className="text-gray-500">Description rapide de la paire.</p>
            <p className="text-gray-800 font-semibold mt-2">$199</p>
          </div>

          <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
            <img
              src=""
              alt="Sneaker"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h4 className="text-lg font-bold">Sneaker Nom</h4>
            <p className="text-gray-500">Description rapide de la paire.</p>
            <p className="text-gray-800 font-semibold mt-2">$199</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;