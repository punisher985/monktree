var express = require('express')
var authRoutes = require('./routes/auth-route')
var mongoose = require('mongoose')
var request = require('request')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);
const passport = require('passport');
const passportSetup = require('./config/passport-setup')
require('./config/passport-setup')(passport)
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const User = require('./models/User');
const RegistrationDetails = require('./models/register');
const ForgotDetails = require('./models/forgot');
const AcademicDetails = require('./models/academics');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
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
app.use(urlencodedParser);

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/signup', function(req, res) {
  res.render('signup')
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

app.get('/fail', function(req, res) {
  res.render('fail')
})

app.get('/taken', function(req, res) {
  res.render('taken')
})

app.get('/policy', function(req, res) {
  res.render('policy')
})

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/');
  } else {
    next();
  }
}

app.get('/dashboard', authCheck, function(req, res) {
  res.render('dashboard', {
    user: req.user
  })
})


app.post('/', passport.authenticate('local', {
    failureRedirect: '/fail',
    successRedirect: '/dashboard',
}))


app.post('/signup',async (req, res, done) => {
  let user = await User.findOne({
    username: req.body.username
  }).catch(() => {
    return res.status(400).send({
      error: "Something Went wrong"
    })
  });
  console.log(req.body)
  if (!user) {

    user = new User({
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
      conpassword: req.body.conpassword
    }).save().catch((err) => {
      console.log(err)
    })
    return res.redirect('/register');
  }
  console.log(user)
  return res.redirect('/taken')
});

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
