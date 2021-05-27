const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./server/db');

const users = require('./server/user'); 

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./server/passport')(passport);

app.use(express.urlencoded({ extended: false })); //тут был боди парсер
app.use(express.json()); //тут был боди парсер

app.use('/api/users', users);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});













// 'use strict';
// const path = require('path');
// const express = require('express');

// const app = express();

// const staticPath = path.join(__dirname, '/');
// app.use(express.static(staticPath));

// // Allows you to set port in the project properties.
// app.set('port', process.env.PORT || 3000);

// const server = app.listen(app.get('port'), function() {
//     console.log('listening');
// });