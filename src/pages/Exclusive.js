import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Exclusive = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-8 text-red-500">{error}</div>;
    }

    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Exclusive Products</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold">{product.title}</h3>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <span className="text-lg font-bold">${product.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exclusive;
