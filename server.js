console.log('May Node be with you')

const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })
  app.get('/', (req, res) => {
    res.send('Hello World')
    
  })
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
const express = require('express')
const bodyParser= require('body-parser')
const app = express()

pp.use(bodyParser.urlencoded({ extended: true }))

// All your handlers here...
app.get('/', (req, res) => {/*...*/})
app.post('/quotes', (req, res) => {/*...*/})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})