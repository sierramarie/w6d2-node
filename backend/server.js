// console.log(process.env.DATABASE_URL)
// // Libraries. Loads in express. 
// var express = require('express')    
// var pg = require('knex')({
//   client: 'pg',
//   connection: process.env.DATABASE_URL,
// })
// var bodyParser = require('body-parser')


// // Create our webserver
// var app = express()

// // adds public static file support
// app.use(express.static('public'))
// app.use(bodyParser.json())


// // routes
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.get('/add', function (req, res) {
//     var answer = Number(req.query.number1) + Number(req.query.number2)
    
//     res.send('<h1>' + answer + '</h1>')
// })

// app.get('/users', function (req,res) {
//      pg('users').select().then(function(data) {
//             res.json(data)
//         })

    var users = []
    for (let i = 0; i < 25; i++) {
    }
        var users = {
            id: i,
            username: 'Acme'
        }
        users.push(user)
    }
    res.json(users)
})

// app.get('/name/:username', function (req, res) {
//   res.send('Hey ' + req.params.username)
// })

// app.post('/users', function(req, res) {
//     pg.insert(req.body).then(function(data) {
//         res.json(data)
//     })
// })


// // Listen for web traffic, start the web server! 
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })





// Libraries
let express = require('express')
let knex = require('knex')({client: 'pg', connection: process.env.DATABASE_URL})
let bodyParser = require('body-parser')
const PORT = 3000

// Create web server
let app = express()

// Add public static file support
app.use(express.static('public'))

// Parse application/json form post bodies
app.use(bodyParser.json())

// Routes
// Your routes go here...

// Start the web server, listen for incoming web requests
app.listen(PORT, function () {
  console.log('Web server running at http://localhost:' + PORT)
})
