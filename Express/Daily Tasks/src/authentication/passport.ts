import passport from "passport";
import googleStrategy from "./strategies/google";
// import userModel from "../../models/user";

passport.use(googleStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use("google", googleStrategy);

export default 1;
