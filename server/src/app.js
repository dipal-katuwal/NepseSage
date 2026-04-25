const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // This calls your code in config/db.js

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server on ${PORT}`));