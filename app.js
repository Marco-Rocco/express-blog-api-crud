const express = require('express'); //importo express
const app = express() //invoco express
const port = 1200;
// collego il router
const postsRouter = require('./routers/postsRouter'); //importo il router dove ho tutte le rotte

//make images public
app.use(express.static('public')); //rendo pubbliche le immagini

//registro il body-parser
app.use(express.json());

//imposto la funzione del post
app.post('/', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    console.log('response to client on /app');

    res.send('server di blog api crud');
}); //messaggio da mandare alla console e al client

app.use("/posts", postsRouter) //creo il colegamento per le rotte. quidni l'indice da inserire nell path

app.listen(port, () => {
    console.log('server in ascolto su ' + port);
}); //imposto l'ascolto del mio server