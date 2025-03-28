const posts = require('../data/postsArray')

//mostra tutti gli elementi
function index(req, res) {
    console.log('response was sent for /routers')

    res.json(posts)
};

//mstra solo elemento desiderato
function show(req, res) {
    console.log('showing details for post ' + req.params.id);

    const id =  parseInt(req.params.id);

    const result = posts.find((post) => {
        return post.id === id;
    });

    if(!result) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'not found',
            message: 'elemento non trovato'
        })
    }

    res.json(result)
};

//elimina elemento
function destroy(req, res) {
    const id = parseInt(req.params.id);

    const result = posts.find((post) => {
        return post.id === id;
    });

    if(!result) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'not found',
            message: 'elemento non trovato'
        })
    }

    posts.splice(posts.indexOf(result), 1);

    console.log(posts)
    //res.sendStatus è quello ch3e fornisce il messaggio, se scrivi solo status carica all'infinito
    //status 204 indica che l'operazione è andata a buon fine
    res.sendStatus(204)
}


module.exports = {
    index,
    show,
    destroy
}