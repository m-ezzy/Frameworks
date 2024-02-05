import { Router } from "express";
import passport from "passport";
import authController from '../controllers/auth.js';
// import { signup, login } from '../controllers/auth.js';

const authRouter = Router();

// authRouter.post("/signup", authController.signup);
authRouter.post("/login", passport.authenticate('local'), authController.login);
// authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;



router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

