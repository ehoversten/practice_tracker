const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;


const app = express();

// Define Middleware Methods
app.use(express.urlencoded({ extended: false }));

// -- Setup basic logger
app.use((req, res, next) => {
    console.log(`Endpoint: ${req.path} - Method: ${req.method}`);
    next();
});


// -- Routes
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
