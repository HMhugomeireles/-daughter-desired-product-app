import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  site: process.env.SITE || 'http://localhost:3000',

  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);





// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'

// const providers = [
//     Providers.GitHub({
//         clientId: process.env.GITHUB_CLIENT_ID,
//         clientSecret: process.env.GITHUB_CLIENT_SECRET
//     })
// ]

// const callbacks = {}

// callbacks.signIn = async function signIn(user, account, metadata) {
//     if (account.provider === 'github') {    
//         const githubUser = {
//             id: metadata.id,
//             login: metadata.login,
//             name: metadata.name,
//             avatar: user.image
//         }
    
//         user.accessToken = await getTokenFromYourAPIServer('github', githubUser)
//         return true
//     }

//     return false;
// }

// callbacks.jwt = async function jwt(token, user) {
//     if (user) {
//         token = { accessToken: user.accessToken }
//     }

//     return token
// }

// callbacks.session = async function session(session, token) {
//     session.accessToken = token.accessToken
//     return session
// }

// const options = {
//     providers,
//     callbacks
// }

// export default (req, res) => NextAuth(req, res, options)