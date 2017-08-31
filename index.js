
var fs = require('fs');

function readLinesAsArray(filename, cb) {
  fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
    if(err) return cb(data);

    cb(null, data.split(/\r?\n/));
  });
}

module.exports = function(cb) {
  readLinesAsArray('adjectives.txt', function(err, adjectives) {
    if(err) return cb(err);
    readLinesAsArray('nouns.txt', function(err, nouns) {
      if(err) return cb(err);
      
      var ai = Math.round(Math.random() * (adjectives.length - 1));
      var ni = Math.round(Math.random() * (nouns.length - 1));
      
      cb(null, adjectives[ai] + ' ' + nouns[ni]);
    });
  });
}


