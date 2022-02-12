var express = require('express')
var path = require('path')
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')
var app = express()

var url = 'mongodb://localhost:27017/'
var dbo

MongoClient.connect(url, function (err, database) {
  if (err) throw err
  dbo = database.db('signup')
  console.log('database created successfully')

  app
    .get('/', function (req, res) {
      return res.redirect('./index.html')
    })
    .listen(8000, () => {
      console.log('Server listening at : 8000')
    })

  app.use('/', express.static(__dirname + '/'))
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  app.post('/success', function (req, res) {
    var data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    }
    dbo.collection('details').insertOne(data, (err, collection) => {
      if (err) throw err
      console.log('Record inserted successfully')
      console.log(collection)
    })
    console.log('DATA is ' + JSON.stringify(data))
    return res.redirect('./sucess.html')
    db.close()
  })
})
