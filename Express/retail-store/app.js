import express from "express";
import fs from 'fs';
import http from 'http';
import path from 'path';
import url from 'url';

/*
import express, { static } from "express";
import { readFile, readFileSync } from 'fs';
import { createServer } from 'http';
import { join } from 'path';
import { parse } from 'url';
*/

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || "8000";

// write next 2 lines because you are using ES modules
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

app.use(express.static(path.join('public')));

app.use(express.static(path.join('css')));
app.use(express.static(path.join('js')));
//app.use(express.static(path.join(__dirname, 'js')));
/*
app.use(express.urlencoded({extended: true}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
*/
/*
app.use("/", route.index);
app.use("/home", route.index);
app.use("/", route.index);
*/

app.get("/script/index", (req, res) => {
	res.sendFile(process.cwd() + '/scripts/three.js')
})

app.get("/", (req, res) => {
	res.redirect("/home");
});
app.get("/home", (req, res) => {
	res.contentType("html");
	res.sendFile(path.resolve(__dirname, `./views/home.html`));
});
app.get("/breads", (req, res) => {
	res.contentType("html");
	res.sendFile(path.join(__dirname, `views/breads.html`));
});
app.get("/cakes", (req, res) => {
	res.contentType("html");
	res.sendFile(`${__dirname}/views/cakes.html`);
});
app.get("/cakes/:cake_id/users/:user_id", (req, res) => {
	res.contentType("html");
	res.send(req.params.cake_id + req.params.user_id);
});
app.get("/contact", (req, res) => {
	res.contentType("text/html");
	res.sendFile(`${__dirname}/views/contact.html`);
});
app.get("/about", (req, res) => {
	/*res.writeHead(200, { 'Content-Type': 'text/html' });*/
	res.contentType("html");
	res.sendFile(`${__dirname}/views/about.html`);
	/*
	fs.readFile("./views/about.html", function (error, pgResp) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(pgResp);
		res.end();
	});
	*/
});

/*
else if (path == '/cakes') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		
		readFile("cakes.html", function (error, pgResp) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(pgResp);
			res.end();
		});
	} else if (/\.(css)$/.test(path)) {
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(readFileSync(__dirname + path, 'utf8'));
		res.end();
	}
});
*/

server.listen(port, () => {
	console.log(`server is listening at http://127.0.0.1:${port}`);
});




