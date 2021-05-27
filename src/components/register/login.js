const Validator = require('validator');
const noData = require('./nodata');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !noData(data.email) ? data.email : '';
    data.password = !noData(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.noData(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.noData(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: noData(errors)
    }
}
