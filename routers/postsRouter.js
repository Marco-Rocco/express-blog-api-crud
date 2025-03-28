const express = require('express');
const router = express.Router();


const functions = require('../controllers/postsControllers')

//otteniamo i posts
router.get('/', functions.index);

//ottieni post desiderato
router.get('/:id', functions.show);

module.exports = router;