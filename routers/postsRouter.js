const express = require('express');
const router = express.Router();


const functions = require('../controllers/postsControllers')

//otteniamo i posts
router.get('/', functions.index);

//ottieni post desiderato
router.get('/:id', functions.show);

//elimina post desiderato
router.delete('/:id', functions.destroy)

module.exports = router;