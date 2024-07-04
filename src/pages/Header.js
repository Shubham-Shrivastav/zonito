import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo/zonoito.png';

const Header = () => {
    return (
        <header className="bg-gray-900 sticky top-0 z-50 shadow-lg border-b border-white/40 rounded-b-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 mr-3" />
                        <h1 className="text-xl text-white">Zonito.in</h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    to="/"
                                    className="text-white hover:text-gray-300 transition duration-300"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-white hover:text-gray-300 transition duration-300"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cart"
                                    className="text-white hover:text-gray-300 transition duration-300"
                                >
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
