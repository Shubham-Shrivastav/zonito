// pages/api/requests.js

import { v4 as uuidv4 } from 'uuid'; // for generating UUIDs

// Mock data storage (you might replace this with a database)
let requests = [];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { prompt } = req.body;

        // Simulate processing delay (replace with actual processing logic)
        setTimeout(() => {
            const requestId = uuidv4(); // Generate unique request ID
            const gridImages = generateGridImages(); // Replace with actual image generation logic

            // Simulate response structure
            const response = {
                status: 'success',
                data: {
                    id: requestId,
                    profile_id: 'mock-profile-id',
                    prompt: prompt,
                    status: 'inprogress',
                    progress: '78%',
                    data: {
                        uri: 'https://example.com/generated-image.png',
                        progress: '78%'
                    },
                    error: null,
                    final_image: null,
                    grid_images: gridImages,
                    variant: 1,
                    variant_1: null,
                    variant_2: null,
                    variant_3: null,
                    variant_4: null,
                    waiting_at: new Date().toISOString(),
                    started_at: new Date().toISOString(),
                    completed_at: null,
                    error_at: null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    order_id: null,
                    customer_id: null,
                    upscale_image: null,
                    upscale_status: 'READY',
                    final_image_aws: null,
                    upload_status: false,
                    replicated_request_id: null,
                    client_number: null,
                    request_ip: req.socket.remoteAddress,
                    product_slug: 't-shirt',
                    user_prompt: prompt,
                    order: null
                }
            };

            // Store request temporarily (mock data storage)
            requests.push(response.data);

            res.status(200).json(response);
        }, 3000); // Simulate processing time (3 seconds)
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Mock function to generate grid images (replace with actual logic)
function generateGridImages() {
    return {
        0: 'https://example.com/grid-image-0.png',
        1: 'https://example.com/grid-image-1.png',
        2: 'https://example.com/grid-image-2.png',
        3: 'https://example.com/grid-image-3.png'
    };
}
