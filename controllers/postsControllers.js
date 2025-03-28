const posts = require('../data/postsArray')

function index(req, res) {
    console.log('response was sent for /routers')

    res.json(posts)
}

function show(req, res) {
    console.log('showing details for post ' + req.params.id);

    const id =  parseInt(req.params.id)

    const result = posts.find((param) => {
        return param.id === id;
    }) ?? ('nessun risultato trovato');

    res.json(result)
}

module.exports = {
    index,
    show
}