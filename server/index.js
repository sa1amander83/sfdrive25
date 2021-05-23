const express = require('express')
const app = express();

app.get('/', (req,res)=> {

    res.send('i have your GET request')
})


app.listen(8000, ()=>{
    console.log('server running on 8000 port')
})