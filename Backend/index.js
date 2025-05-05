// This is a simple Express server setup in Node.js.
import express from 'express';
import { connectDB } from './config/db.js';

const app = express();
const PORT = 5000;

app.post('/products', async (req, res) => {
    const product = req.body; // Assuming you send product data in the request body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = new Product();

    try {
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' , error: error.message });
    }
});

app.get('/products', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    connectDB(); // Connect to MongoDB
    console.log(`MongoDB connected`);
    console.log(`Server is listening on port ${PORT}`);
});



