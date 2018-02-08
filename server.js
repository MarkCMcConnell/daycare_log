const express = require('express')
const app = express()
const path = require('path')
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

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/dist'))
app.set('view engine', 'html')
app.use(allowCrossDomain)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())

app.use('/', express.static(path.join(__dirname, 'index')))

app.post('/sendmail/infant', (req, res) => {
  console.log(req.body)
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
