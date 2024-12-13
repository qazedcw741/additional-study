var pathUtil = require('path');

var parsed = pathUtil.parse('user/tmp/local/image.png');
console.log(parsed);

console.log(parsed.base);
console.log(parsed.ext);