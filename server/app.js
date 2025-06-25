const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // Register/login routes

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
