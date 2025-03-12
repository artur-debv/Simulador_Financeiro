import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold">
          FinanceCalc
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-lg hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/simulador" className="text-lg hover:text-gray-200">
              Simulador
            </Link>
          </li>
          <li>
            <Link to="/investimentos" className="text-lg hover:text-gray-200">
              Investimentos
            </Link>
          </li>
          <li>
            <Link to="/market" className="text-lg hover:text-gray-200">
              Mercado
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
