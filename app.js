const express = require('express');
const api = express();
const PORT = 8080;

api.use(express.json())

api.get('/test', (req, res) => { 
    req.body
    res.send({
        test: "this a test"
    })
});

api.listen(
    PORT,   
    () => console.log('API listening on port ${PORT}')
)
