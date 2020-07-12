const validator = require('./node_modules/validator');
const prompt = require('./node_modules/prompt-sync')();
const check = require('./passwordMatch');

const validate = ((email)=>{
    const bool = validator.isEmail(email);
    if(!bool) return('Invalid Email');
    else {
        const pass = prompt('Enter your password ');
        const cpass = prompt('Confirm your password ')
        return (check(pass,cpass));
    }
})
module.exports = validate;
