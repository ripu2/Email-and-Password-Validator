//password validatio Script
const chalk = require('./node_modules/chalk')
const validate = require('./node_modules/validator')
const check = ((pass,cpass)=>{
    const bool = validate.equals(pass,cpass);
    if(bool) return (chalk.greenBright('Login Aprroved'));
    else return (chalk.redBright('Password Mismatch'));
})

module.exports = check;