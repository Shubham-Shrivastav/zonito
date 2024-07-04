import React, { useState } from 'react';
import axios from 'axios';

const PromptInput = ({ setDesign }) => {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('https://macmerise.ai/api/requests', {
                prompt: prompt,
            });
            console.log('API Response:', response.data);
            setDesign(response.data.data);
        } catch (error) {
            console.error('Error fetching design:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
                type="text"
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Enter your prompt..."
                className="w-full max-w-2xl px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-sky-500"
            />
            <button
                type="submit"
                className="w-full max-w-xs mt-2 bg-sky-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-sky-600 transition duration-300"
                disabled={loading}
            >
                {loading ? 'Generating...' : 'Generate'}
            </button>
        </form>
    );
};

export default PromptInput;
