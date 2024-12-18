import React, { useEffect, useState } from 'react';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopin, setShowPopin] = useState(false);
  const [popinMessage, setPopinMessage] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/produits');
      if (!response.ok) {
        throw new Error('Échec du chargement des produits');
      }
      const data = await response.json();
      console.log(data);
      const formattedProducts = data.data.map((item) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        prix: item.prix,
        description: item.description,
      }));
      setArticles(formattedProducts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (productName) => {
    setPopinMessage(`${productName} a été ajouté au panier !`);
    setShowPopin(true);
    setTimeout(() => setShowPopin(false), 3000);
  };

  const handleAddToFavorites = (productName) => {
    setPopinMessage(`${productName} a été ajouté aux favoris !`);
    setShowPopin(true);
    setTimeout(() => setShowPopin(false), 3000);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-800 to-black text-white py-16 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue sur Sneakers Pour Tous</h1>
        <p className="text-lg md:text-2xl mb-8">Les meilleures sneakers, choisies pour vous.</p>
        <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded hover:bg-gray-300">
          Explorer Maintenant
        </button>
      </div>

      <div className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Notre Sélection Premium</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Découvrez des paires iconiques des plus grandes marques comme Nike, Adidas, Puma et bien plus encore.
        </p>
      </div>

      <div className="py-12 px-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Nos Dernières Arrivées</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? (
            <p className="text-center col-span-full text-gray-500">Chargement des produits...</p>
          ) : error ? (
            <p className="text-center col-span-full text-red-500">{error}</p>
          ) : articles.length > 0 ? (
            articles.map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-md rounded p-4 hover:shadow-lg transition"
              >
                <img
                  src={article.image}
                  alt={article.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h4 className="text-lg font-bold">{article.name || 'Nom indisponible'}</h4>
                <p className="text-gray-500">{article.description || 'Description indisponible'}</p>
                <p className="text-gray-800 font-semibold mt-2">{article.prix}$</p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleAddToCart(article.name)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Ajouter au Panier
                  </button>
                  <button
                    onClick={() => handleAddToFavorites(article.name)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                  >
                    Ajouter aux Favoris
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">Aucun produit trouvé.</p>
          )}
        </div>
      </div>

      {showPopin && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow-md">
          {popinMessage}
        </div>
      )}
    </div>
  );
};

export default Home;
