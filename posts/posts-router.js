const express = require('express');

const db = require('./db.js');

const router = express.Router();


// YOU DON'T NEED /API/POSTS WHEN USING ROUTER...IT CHANGES THE ADDRESS COMPLETELY //

//GET ALL
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



//GET BY ID
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    console.log('request:')

    // if (!res.body.id === 0) {
    //     res.status(404).json({ message: "The post with the specified ID does not exist." })
    // }
    db 
    .findById(postId)
    .then(posts => {
        res.status(201).json(posts);
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'The posts information could not be retrieved.'})
    })
})



//POST
router.post('/', (req, res) => {
    const postInfo = req.body;
    console.log('request body:', postInfo);

    if (!req.body.contents || !req.body.title) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    }

    db
    .insert(postInfo)
    .then(post => {
        res.status(200).json(post);
    })
    .catch(err => {
        res.status(500).useChunkedEncodingByDefault({ error: err, message: 'There was an error while saving the post to the database'})
    })
})






module.exports = router;