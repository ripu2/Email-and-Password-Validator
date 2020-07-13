const validate = require('./util')
const prompt = require('./node_modules/prompt-sync')();
const email = prompt('Enter your Email ');
console.log(validate(email));
