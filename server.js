const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, Images) from the public directory
app.use(express.static(path.join(__dirname,)));

// Serve the index.html file when the root route is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'text.html'));
});

// API to get weather data
app.get('/weather', (req, res) => {
    // Add weather logic here if needed
    res.json({
        temp: '22°C',
        condition: 'Clear',
    });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
