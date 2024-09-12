import axios from 'axios';

async function makeRequests(ids: number[], numRequests: number) {
    const delay = 15000; // 15 seconds

    for (let i = 0; i < numRequests; i++) {
        const id = ids[i % ids.length]; // Get the ID from the array using modulo operator
        const url = `https://api.example.com/data/${id}`;

        try {
            const response = await axios.get(url);
            console.log(`Request ${i + 1}:`, response.data);
        } catch (error) {
            console.error(`Request ${i + 1} failed:`, error);
        }

        await new Promise(resolve => setTimeout(resolve, delay)); // Delay between requests
    }
}

// Usage example
const ids = [1, 2, 3, 4, 5]; // Array of IDs
const numRequests = 10; // Number of requests to make

makeRequests(ids, numRequests);