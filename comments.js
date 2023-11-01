// Create a web server
// 1. Create a web server that listens to port 3000
// 2. Handle requests to the root path (/) with a simple "Hello World" message
// 3. Handle requests to the /comments path by sending the comments array
// 4. Handle requests to any other path with a 404 status code and a "Not found" message

const express = require('express');
const app = express();

const comments = [
    { username: 'Tammy', comment: 'lol that is so funny!' },
    { username: 'FishBoi', comment: 'Pls delete this post.' },
    { username: '4EvaInnocent', comment: 'reported for spam.' },
    { username: 'SallyWest', comment: 'This is fake news.' },
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.get('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});