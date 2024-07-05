import React from 'react';

const Cart = ({ cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity, getTotalAmount }) => {
    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md max-w-3xl mx-auto mt-12">
            <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-lg">Your cart is currently empty.</p>
            ) : (
                <div>
                    <div className="border-t border-gray-700 pt-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-700">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-400">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-700 rounded-md text-sm hover:bg-gray-600">-</button>
                                    <span className="mx-2 text-lg">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-700 rounded-md text-sm hover:bg-gray-600">+</button>
                                    <button onClick={() => removeItemFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Total Amount: ${getTotalAmount()}</h2>
                        <button className="bg-sky-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-sky-600 transition duration-300">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
