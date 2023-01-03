const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let host = '';

// const ngrok = require('ngrok');
// (async function () {
//     const url = await ngrok.connect(port);
//     console.log(`${url}:${port}`);
// })();

// // parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

app.use(bodyParser.text({ type: 'text/xml', type: 'application/xml' }));

// parse a Text body into a string
app.use(bodyParser.text({ type: 'text/plain' }));

// parse an XML body into a string
app.use(bodyParser.text({ type: 'text/xml' }));

// parse form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    res.status(200);
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Chooker listening at http://localhost:${port}`);
});
