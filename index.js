const express = require('express')
const app = express()
const port = 5000
var cors = require('cors');
const logger = require('morgan');

const { Client } = require('pg');
const connectionString = 'postgres://postgres:123Max1234@localhost:5432/NodeData';



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Pg connection
const client = new Client({
    connectionString: connectionString
});
client.connect();

app.get('/emp', function (req, res, next) {
    client.query('SELECT * FROM Employee', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});








let books = [];

var corsOptions = {
    origin: function (origin, callback) {


        callback(null, true);


    }
}

app.options('*', cors());

app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
})


app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.post('/create', cors(corsOptions), function (req, res) {
    var newBook = {
        "BookID": req.body.BookID,
        "Title": req.body.Title,
        "Author": req.body.Author
    }
    books.push(newBook)
    console.log(books);

    res.status(201).json({ "some": "response" })


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})