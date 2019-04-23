const express = require('express');

//router goes here 
const postsRouter = require('./posts/posts-router.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h1>Is this thing working?</h1>
    <p>No...seriously...</p>
    `);
});

server.use('/api/posts', postsRouter);

module.exports = server;