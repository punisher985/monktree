const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const keys = require('./keys')
const mongoose = require('mongoose');
const User = require('../models/User')
const bcrypt = require('bcryptjs');

module.exports = function(passport){
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  // Local Strategy
  passport.use(
    new LocalStrategy( async (username, password, done) => {
      // Match user
      console.log(username)
      const user = await  User.findOne({ username: username})

        if (!user) {
          return done(null, false, { message: 'That username is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, {message: 'Password incorrect' });
          }
        });

    })
  );

}
