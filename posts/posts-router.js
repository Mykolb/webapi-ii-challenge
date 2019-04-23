const express = require('express');

const db = require('./db.js');

const router = express.Router();


router.get('/', (req, res) => {
    db 
    .find()
    .then(posts => {
        res.status(201).json(posts);
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'The posts information could not be retrieved.'})
    })
})




router.post('/api/posts', (req, res) => {
    console.log('request body:', postInfo);

    db
    .insert(postInfo)
    .then(post => {
        res.status(201).json(post);
    })
    .catch(err => {
        res.status(500).useChunkedEncodingByDefault({ error: err, message: 'There was an error while saving the post to the database'})
    })
})






module.exports = router;