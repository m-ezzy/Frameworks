// import dotenv from 'dotenv';
// dotenv.config({ path: `./env-files/${process.env.NODE_ENV || 'development'}.env`, options: { debug: true } });

import path from 'path'
import url from 'url'
import http from 'http';
import http2, { Http2Server } from 'http2';
import { AddressInfo } from "net";

import express, { Express, NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import debug from 'debug';

// import database from './database.js';
// import { clearDatabase, populateDatabase } from './seeder.js';

import session from 'express-session';
// import sessionStore from './config/sessionStore.js';

import passport from 'passport';
import passportExecute from './passport/passport.js';

import routes from './routes/index';

const app: Express = express();

const port = process.env.PORT || 8000;
app.set('port', process.env.PORT || 8000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// await connectDatabase();
// await buildDatabase();

// const httpServer: Http2Server = http.createServer(app);

// app.use(cors(
//   {
//     origin: ['http://localhost:5173'],
//     methods: "*",
//     allowedHeaders: ["Access-Control-Allow-Origin", "Content-Type", "Authorization"],
//     credentials: true,
//   }
// ));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  // store: sessionStore,
  cookie: {
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  }
}));

app.use(passport.initialize());

// both are same
app.use(passport.session());

app.use(passport.authenticate('session'));

// protects all routes
// app.use(passport.authenticate('session')); //basic local session token bearer provider openid

app.use((req: Request, res: Response, next: NextFunction) => {
  // console.log("req.session", req.session);
  console.log("session ID :", req.sessionID);
  // console.log("user name  :", req.user?.name);
  // console.log("req.isAuthenticated()", req.isAuthenticated());
  next();
});

app.use("/", express.static(path.join(process.cwd(), "public")));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const httpServer = app.listen(app.get('port'), function () {
  debug(`Express server listening on port ${(httpServer.address() as AddressInfo).port}`);
});

httpServer.listen(port, () => {
  console.log(`----------> Express server app - rivendell - running on port ${port}`);
});

export default app;
