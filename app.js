const express = require('express');
const app = express()
const port = 1200;
// collego il router
const postsRouter = require('./routers/postsRouter');

//make images public
app.use(express.static('public'));


app.get('/', (req, res) => {
    console.log('response to client on /app');

    res.send('server di blog api crud');
});

app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log('server in ascolto su ' + port);
});