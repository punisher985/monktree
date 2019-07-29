var express = require('express')
var authRoutes = require('./routes/auth-route')
var mongoose = require('mongoose')
var request = require('request')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msgAccount = "AC0d26077960dbd1bbfe0eabdb7ffa71b9"
const msgToken = "af52ee9a1008604f60acb2aad9995aa8"
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '9494a9a3',
  apiSecret: '3fpdGZeY9Y1vhJAm',
});

const msgClient = require('twilio')(msgAccount, msgToken)
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
    const msg = {
      to: `${req.body.email}`,
      from: 'hey@monktree.net',
      subject: 'Welcome to Monktree',
      text: 'Thank You for joining Monktree',
      html: '<h1>Thank You for joining Monktree</h1>',
    };
    sgMail.send(msg);

    msgClient.messages.create({
      to: `+91 + ${req.body.phone}`,
      from: '+19156006674',
      body: 'You have been sucessfully registered with Monktree'
    })

    const from = '918920836248';
    const to = `91+${req.body.phone}`;
    const text = 'You have been sucessfully registered with Monktree';

    nexmo.message.sendSms(from, to, text);

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
