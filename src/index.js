const express = require('express');
require('dotenv').config();
const config = require('./config/config.app');

const app = express();
const port = process.env.PORT || 8081;

config(app);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Running port : ${port}`);
});
