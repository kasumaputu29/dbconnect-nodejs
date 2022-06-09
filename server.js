const express = require('express')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection ({ // createConnection/connect to database
    host: 'localhost',
    database: 'db-nodejstest',
    user: 'root',
    password: '',
})

db.connect(function (err, success) { // jika error dan jika success
    if (err) { // jika error
        console.error('Failed to connect')
    } 

    else if (success) { // jika success
        console.log('Connected to database')
    }
})

app.listen(8000, () => console.log('Server listening on')) // listen on port 8000

