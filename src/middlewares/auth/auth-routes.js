const {Router} = require('express')
const passport = require('passport')

const routerAuth = Router();

routerAuth.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }))


routerAuth.get('/google/callback', 
  passport.authenticate('google', { 
    successRedirect: '/auth/success', 
    failureRedirect: '/auth/failed' 
  }))
  

routerAuth.get('/failed', 
    (req, res) => {
      res.json({error: true, message: "Your login have fail, try again."})
    }
)

routerAuth.get('/success', 
    (req, res) => {
      res.json({error: true, message: "You are login."})
    }
)

module.exports = routerAuth;