import React from 'react';

const TrendingSection = () => {
    const trendingItems = [
        {
            id: 1,
            title: "Trending Design 1",
            image: "https://via.placeholder.com/150",
            description: "Description for trending design 1"
        },
        {
            id: 2,
            title: "Trending Design 2",
            image: "https://via.placeholder.com/150",
            description: "Description for trending design 2"
        },
        {
            id: 3,
            title: "Trending Design 3",
            image: "https://via.placeholder.com/150",
            description: "Description for trending design 3"
        },
        {
            id: 4,
            title: "Trending Design 4",
            image: "https://via.placeholder.com/150",
            description: "Description for trending design 4"
        },
    ];

    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Trending Designs</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {trendingItems.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingSection;
