const express = require('express')

const app = express()

app.use(require('./api'))

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server up and running in %d ', server.address().port)
})