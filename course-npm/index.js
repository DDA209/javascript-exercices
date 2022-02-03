var lodash = require('lodash');
var cat = require('./external.js').cat.name;

var numbers = [1, 2, 3, 1, 4, 11];

var output = lodash.without(numbers, 1);

console.log(output);

console.log(cat);
