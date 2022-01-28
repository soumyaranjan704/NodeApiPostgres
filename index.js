

const express = require('express')// Express module just as you require other modules and puts it in a variable. var app = express(); => Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application)

const app = express()
const port = 5000  // server will run on this port
var cors = require('cors');  // used for cors error
const logger = require('morgan');  //HTTP request logger middleware for node.js.

const { Client } = require('pg');


                            //Potocol  DB user   password   host          databasename
const connectionString = 'postgres://postgres:123Max1234@localhost:5432/NodeData';
 


app.use(logger('dev')); // using nodemon (server will run automatically if any changes)
app.use(express.json()); //express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app
app.use(express.urlencoded({ extended: false })); //handle the bookid null



//Pg connection
const client = new Client({
    connectionString: connectionString
});
client.connect();

app.get('/emp', function (req, res, next) {
    // client.query('SELECT * FROM Employee where id = $1', [1], -->If you use this this will give only 1 result because it will search  ID NO 1.
    client.query('SELECT * FROM Employee', function (err, result) {  //This will gives you all the data information inside the table
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});







//IGNORE
let books = [];

//"Cross-Origin Request Blocked: This error will come
//CORS ISSUE (When your port is different in that case CORS error comes .search more on google )
var corsOptions = {
    origin: function (origin, callback) {


        callback(null, true);


    }
}

app.options('*', cors());

app.use(cors());


//Home get request It will gives you Hello world http://localhost:5000/
app.get('/', (req, res) => {
    res.send('Hello World!')
})


//GET request  http://localhost:5000/about
app.get('/about', (req, res) => {
    res.send('Hello about!')
})

//GET request http://localhost:5000/api
app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})


// This is the post method .You can follow only how to create the post method in node js
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

//Server will run on a perticular port we are using 5000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})