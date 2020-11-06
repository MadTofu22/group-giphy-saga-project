const react = require('react');
const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// Route to connect to the Giphy API and get the results to pass back to client
router.get('/:search', (req, res) => {
    const key = process.env.GIPHY_API_KEY;
    const numOfGifs = 6;
    const queryText = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${req.params.search}&limit=${numOfGifs}&offset=0&lang=en`;
    axios.get(queryText).then(result => {
        res.send(result.data);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;