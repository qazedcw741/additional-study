var url = require('url');

var urlStr = 'http://idols.com/hot/q?group=groupname&name=someone&since=';
var parsed = url.parse(urlStr, true);
// console.log(parsed);

// console.log('protocol : ', parsed.protocol);
// console.log('host : ', parsed.host);
console.log('query : ', parsed.query);

