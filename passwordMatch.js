//password validatio Script

const validate = require('./node_modules/validator')
const check = ((pass,cpass)=>{
    const bool = validate.equals(pass,cpass);
    if(bool) return 'Login Aprroved';
    else return 'Password Mismatch';
})

module.exports = check;