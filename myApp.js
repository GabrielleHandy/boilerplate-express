var express = require('express');
var MESSAGE_STYLE = require('dotenv').config('MESSAGE_STYLE');
var app = express();

// Creates a response from when path is reached using get 
// app.get('/', say)
// function say(req, res){
//     // req is request object and res is the response object
//     // Hello Express is the response string after function recieves the request object and emits a reponse
//     res.send('Hello Express')
// };
// 

app.get('/', showForm)

function showForm(req, res){
    // __dirname is a global variable that makes it easier to write 
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
};

let absolutePath = __dirname + '/public';
app.use('/public', express.static(absolutePath));

// Mini REST API when this path gets a get request the response is json
app.get('/json', createJSON)
function createJSON(req, res){
    let info = {"message": "Hello json"};
    res.json(info)
};
console.log('Hello World');





















 module.exports = app;
