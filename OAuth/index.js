'use strict'

let express = require('express')
let passport = require('passport')
let Strategy = require('passport-github').Strategy
let dotenv = require('dotenv').config()

passport.use(new Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:1337/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile)
  }
))

passport.serializerUser(function(user, cb) {
  cb(null, profile)
})

passport.deserializerUser(function(user, cb) {
  cb(null, profile)
})

let app = express()

app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true}))
app.use(require('express-session')(
  {
     secret: 'keyboard cat',
     resave: true,
     saveUninitialized: true
  }
))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'jade')

app.get('/',
  function(req, res){
    res.render('hello')
  })

app.listen(1337)
