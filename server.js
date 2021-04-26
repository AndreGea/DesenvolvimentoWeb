var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './static')))

app.get('/', function(request,response){
    response.sendFile(path.join(__dirname,'./static/home.html'))
})

app.listen(8000, function(){
    console.log("Servidor rodando na porta 8000");
})