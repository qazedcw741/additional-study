var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.access('./lemo.png', function(err){
    // fs.access('./lemon.png', function(err){
        if(err){
            res.statusCode = 404;
            res.end();
            return;        
        }
        fs.readFile('./lemon.png', function(err, data){
            res.end(data);
        });
    });
}).listen(3000);