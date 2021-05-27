const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true
    },    
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    passportSerial: {
        type: String,
        required: true
    },
    passportDate: {
        type: String,
        required: true
    },  
    passportPassed: {
        type: String,
        required: true
    },

    passportPassedCode: {
        type: String,
        required: true
    },
    permissSerial: {
        type: String,
        required: true
    },
    permissDate: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    } 
});

const User = mongoose.model('users', UserSchema);

module.exports = User;