import logo from "../assets/logo.png"

function NavBar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
            {/* Partie gauche avec logo */}
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-8 w-8" /> {/* Logo ici */}
                <span className="text-2xl font-bold">Sneakers </span>
                <span className="text-grey-550">pour tous</span>
            </div>

            {/* Liens de navigation */}
            <ul className="flex space-x-6 text-gray-700">
                <li className="flex items-center">
                    <i className="mr-1 text-gray-400"></i> {/* Icone Pages */}
                    <a href="#" className="hover:text-gray-900">Accueil</a>
                </li>
                <li className="flex items-center">
                    <i className="mr-1 text-gray-400"></i> {/* Icone Account */}
                    <a href="#" className="hover:text-gray-900">Catalogue</a>
                </li>
                <li className="flex items-center">
                    <i className="mr-1 text-gray-400"></i> {/* Icone Blocks */}
                    <a href="#" className="hover:text-gray-900">panier</a>
                </li>
                <li className="flex items-center">
                    <i className="mr-1 text-gray-400"></i> {/* Icone Docs */}
                    <a href="#" className="hover:text-gray-900">favoris</a>
                </li>
            </ul>

            {/* Partie droite avec LOG IN et SIGN IN */}
            <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900">LOG IN</a>
                <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">
                    SIGN IN
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
