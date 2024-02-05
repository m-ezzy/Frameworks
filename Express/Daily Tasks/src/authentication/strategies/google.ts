import { Strategy } from "passport-google-oauth20";

const googleStrategy = new Strategy(
	{
	  clientID: process.env.GOOGLE_CLIENT_ID,
  	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  	callbackURL: "/api/auth/google/callback",
	},
  function (request, accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
);

export default googleStrategy;
