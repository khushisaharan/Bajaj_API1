const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Route
app.post('/bfhl', (req, res) => {
    try {
        const { array } = req.body;
        if (!Array.isArray(array)) {
            throw new Error('Input should be an array.');
        }

        // Logic to process the array and generate the response
        const evenNumbers = array.filter(num => num % 2 === 0);
        const oddNumbers = array.filter(num => num % 2 !== 0);
        const alphabetsUpperCase = array.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

        // Construct the response
        const response = {
            user_id: 'john_doe_17091999', // Replace with your own user ID logic
            is_success: true,
            even_numbers: evenNumbers,
            odd_numbers: oddNumbers,
            alphabets_uppercase: alphabetsUpperCase
        };

        res.json(response);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
