var express = require('express')
var authRoutes = require('./routes/auth-route')
var mongoose = require('mongoose')
var request = require('request')
const passport = require('passport');
const passportSetup = require('./config/passport-setup')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const User = require('./models/User');
const RegistrationDetails = require('./models/register');
const ForgotDetails = require('./models/forgot');
const AcademicDetails = require('./models/academics');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({
  extended: true
})

var app = express();

app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));


app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});


app.use('/auth', authRoutes);

app.get('/', function(req, res) {
  res.render('index', {
    user: req.user
  });
})

app.get('/register', function(req, res) {
  res.render('register')
})

app.get('/done', function(req, res) {
  res.render('done')
})

app.get('/forgotpassword', function(req, res) {
  res.render('forgotpassword')
})

app.get('/academic_details', function(req, res) {
  res.render('academic_details')
})

app.get('/recover', function(req, res) {
  res.render('recover')
})

const authCheck = (req,res,next) => {
  if(!req.user){
    res.redirect('/');
  }else{
    next();
  }
}

app.get('/dashboard', authCheck, function(req, res) {
  res.render('dashboard', {user:req.user})
})

app.post('/', urlencodedParser, function(req, res) {
  User.create(req.body).then(function() {
    res.redirect('/auth/google')
  });
})

app.post('/forgotpassword', urlencodedParser, function(req, res) {
  ForgotDetails.create(req.body).then(function() {
    res.render('recover')
  });
})

app.post('/register', urlencodedParser, function(req, res) {
  RegistrationDetails.create(req.body).then(function() {
    res.redirect('/done')
  });
})

app.post('/academic_details', urlencodedParser, function(req, res) {
  AcademicDetails.create(req.body).then(function() {
    res.redirect('/register')
  });
})

  console.log("app runnig at port 4001");
  app.listen(process.env.PORT || 4001);
