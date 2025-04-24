// This is a simple Express server setup in Node.js.
import express from 'express';
import { connectDB } from './config/db.js';

const app = express();
const PORT = 5000;

app.post('/products', (req, res) => {});

app.get('/products', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    connectDB(); // Connect to MongoDB
    console.log(`MongoDB connected`);
    console.log(`Server is listening on port ${PORT}`);
});



