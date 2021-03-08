const express = require ('express');
const mongoose = require ('mongoose');
const { usersRouter } = require('./user-router');
const app = express();


mongoose.connect ('mongodb://localhost:27017/sfdrive', {useNewUrlParser:true, useUnifiedTopology:true})
.then (()=> console.log('connection established'))
.catch (error => console.log(error));

app.use ('/users', require('./user-router'))

app.listen (8081, ()=> {
console.log('server is listening');
})

function logger (req,res,next){
    console.log(`[${req.method}]-${req.url}`);
    next();
}



app.use(logger);
app.use('/users', usersRouter);

app.use(express.static('dist'))

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


app.listen(8081,()=>{
    console.log('серв прослушивается на порту 8081');
});






const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 8000);

const server = app.listen(app.get('port'), function() {
    console.log('listening');
});