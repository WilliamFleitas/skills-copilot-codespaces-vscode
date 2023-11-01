// Create a web server
// Use express framework to create a web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Use ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express.static() to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the 'comments' route
app.use('/comments', require('./routes/comments'));

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));