'use strict';

import express from 'express';
import { usersRouter } from './user-router';
const app = express();

function logger (req,res,next){
    console.log(`[${req.method}]-${req.url}`);
    next();
}



app.use(logger);
app.use('/users', usersRouter);

// app.use(express.static('dist'))

app.get ('/',(req,res)=> {
    res.statusCode= 418;
    res.setHeader('QQ','skill')
    res.send('я получил ваш ГЕТ запрос');
});


function authMidlwar( req,res,next) {
    if (req.headers['authorization']!==undefined) {
        next()
    }    else {
        res.statusCode=401;
        res.send ('error, you need to autorize')
        }
    }



app.post ('/',authMidlwar,(req,res)=> {
    console.log(req.url);
    console.log(req.headers);
    res.send('я получил ваш POST запрос');
});

app.put ('/',(req,res)=> {
    res.send('я получил ваш PUT запрос');
});

app.delete ('/',(req,res)=> {
    res.send('я получил ваш DeELETE запрос');
});

app.listen(8000,()=>{
    console.log('серв прослушивается на порту 8000');
});






// const staticPath = path.join(__dirname, '/');
// app.use(express.static(staticPath));

// // Allows you to set port in the project properties.
// app.set('port', process.env.PORT || 8000);

// const server = app.listen(app.get('port'), function() {
//     console.log('listening');
// });