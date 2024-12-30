var fs = require('fs');

var os = fs.createWriteStream('./output2.txt');

os.on('finish', function() {
    console.log('finish!');
});

// os.write('1234');
// os.write('4567');
// os.end('789');

var is = process.stdin;
is.pipe(os);