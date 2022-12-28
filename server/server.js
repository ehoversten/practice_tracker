const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/connection');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

// Define Middleware Methods
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// -- Setup basic logger
app.use((req, res, next) => {
    console.log(`Endpoint: ${req.path} - Method: ${req.method}`);
    next();
});


// -- Routes
app.use(routes);



db.once('open', () => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server listening on PORT: ${PORT}`);
    });
}) 


