const connect = require('./configs/db.js')
const express = require('express');
const app = express();
app.use(express.json());

connect();

const port = 8000;

app.listen((port) => {
    console.log(`Server listening at ${port}`)
})

