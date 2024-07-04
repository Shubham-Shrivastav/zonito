import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">About Zonito</h2>
                        <p className="text-sm">
                            Zonito is your one-stop shop for all your shopping needs, offering a wide range of products from electronics to fashion.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <p className="text-sm">Email: contact@zonito.in</p>
                        <p className="text-sm">Phone: +1234567890</p>
                        <p className="text-sm">Address: 123 Zonito Street, City, Country</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Terms of Use</h2>
                        <ul className="text-sm">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                                Facebook
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                                Twitter
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
