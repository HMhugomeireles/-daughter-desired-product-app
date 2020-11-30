const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserModel = require('../../database/schemas/User');

passport.serializeUser(function(user, done) {
    done(null, user);
})

passport.deserializeUser(function(user, done) {
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CONSUMER_KEY,
    clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://localhost:9901/auth/google/callback"
  },
  async function(token, tokenSecret, profile, done) {
    const userTemp = {
      provider: {
        id: profile.id,
        provider: profile.provider
      },
      name: profile.displayName,
      email: profile.emails[0].value,
      picture: profile.photos[0].value,
      role: 'admin'
    }  

    const userSearch = await UserModel.findOne({ email: userTemp.email })

    if (userSearch) {
      done(null, {token, userSearch});
      return;
    }

    const userSave = await UserModel.create(userTemp);

    done(null, {token, userSave})
  }
));