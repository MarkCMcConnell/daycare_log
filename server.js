const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const helmet = require('helmet')
const toddlerEmailBuilder = require('./src/EmailTemplates/toddlerEmailBuilder')
const infantEmailBuilder = require('./src/EmailTemplates/infantEmailBuilder')
const port = process.env.PORT || 3000

require('dotenv').config()

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

app.use(express.static(__dirname + '/public'))
app.use(allowCrossDomain)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())

app.get('/key', (req, res) => {
  res.send({
    apiKey: process.env.API_KEY
  })
})

app.post('/sendmail/infant', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: req.body.providerEmail,
      pass: req.body.providerPassword
    }
  })

  let htmlEmail = infantEmailBuilder(req.body)

  let mailOptions = {
    from: req.body.providerEmail,
    to: req.body.parentEmail,
    subject: req.body.name + ' - ' + req.body.today,
    html: htmlEmail
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
})

app.post('/sendmail/toddler', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: req.body.providerEmail,
      pass: req.body.providerPassword
    }
  })

  let htmlEmail = toddlerEmailBuilder(req.body)

  let mailOptions = {
    from: req.body.providerEmail,
    to: req.body.parentEmail,
    subject: req.body.name + ' - ' + req.body.today,
    html: htmlEmail
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
})

app.listen(port, function () {
  console.log('Server started on port: ' + port)
})
