let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./db');
const userRoute = require('./user-router');


mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
  useNewUrlParser: true
}).then(() => {
      console.log('Database connected sucessfully !')
    },
    error => {
      console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
// app.use('/users', userRoute)


// const port = process.env.PORT || 27017;
// const server = app.listen(port, () => {
//   console.log('Connected to port ' + port)
// })

// Error Handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});