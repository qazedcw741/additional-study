var fs = require('fs');

try{
    var data = fs.readFileSync('./helloWorl.txt', 'utf-8');
    console.log(data);
} catch (err){

    console.error('error : ', err);
}

