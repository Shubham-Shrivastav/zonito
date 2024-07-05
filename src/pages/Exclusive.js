import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "sonner";

const Exclusive = ({ addItemToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addItemToCart(product);
        toast.success(`${product.title} added to cart!`);
    };


    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Exclusive Products</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold">{product.title}</h3>
                        <p className="text-gray-600 mt-2">${product.price}</p>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-sky-600 transition duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exclusive;
