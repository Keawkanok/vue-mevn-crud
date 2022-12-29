let express = require('express'),
    database = require('./database'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    createError = require('http-errors');

// Connet MongoDB 
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected succ ');
}, err => {
    console.log('Cannot connect to db ' + err);
})

const studentAPI = require('../backend/routers/student.router')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

// API 
app.use('/api', studentAPI);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
})

// 404 Handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})