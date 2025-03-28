const express = require('express');
const router = express.Router();
const posts = require('../postsArray')

//otteniamo i posts
router.get('/', (req, res) => {
    console.log('response was sent for /routers')

    res.json(posts)
});

//ottieni post desiderato
router.get('/:id', (req, res) => {
    console.log('showing details for post ' + req.params.id);

    const id =  parseInt(req.params.id)

    const result = posts.find((param) => {
        return param.id === id;
    }) ?? ('nessun risultato trovato');

    res.json(result)
});

module.exports = router;