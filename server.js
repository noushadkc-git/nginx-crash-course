const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by node app`);
});

app.listen(port, () => {
    console.log(`node app is listening on port ${port}`);
});