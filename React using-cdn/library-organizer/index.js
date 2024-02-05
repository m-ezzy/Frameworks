import express, { query } from 'express'
import http from 'http'
import path from 'path'
import url from 'url'
import mysql from 'mysql'
import util from 'util'

/*
import express, { static } from "express";
import { readFile, readFileSync } from 'fs';
import { createServer } from 'http';
import { join } from 'path';
import { parse } from 'url';
*/

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || "8000"

// write next 2 lines because you are using ES modules
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename, __dirname)

// database
let con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'library-organizer'
})
// promise wrapper to enable async await with MYSQL
con.query = util.promisify(con.query).bind(con)
// connect to the database
con.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack)
		return
	}
	console.log("connected as... " + con.threadId)
})

app.use(express.static(path.join(__dirname, 'public')))
/*
app.use(express.urlencoded({extended: true}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
*/
app.get("/select", async (req, res) => {
	let sql = 'SELECT * from books'
	let rows = await con.query(sql).catch(err => { throw err })
	//next 2 lines are very important //this is what i neede to do to host it on hosting platforms
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "*");
	res.json(rows)
})
app.get("/insert/:title/:copies", async (req, res) => {
	// console.log(req)
	// console.table(req)
	let sql = `INSERT INTO books (title,copies) VALUES('${req.params.title}',${req.params.copies})`
	let rows = await con.query(sql).catch(err => { throw err })
	res.json({'id': rows.insertId})
})
app.get("/update/:id/:title/:copies", async (req, res) => {
	let sql = `UPDATE books SET title='${req.params.title}',copies=${req.params.copies} WHERE id=${req.params.id})`
	let rows = await con.query(sql).catch(err => { throw err })
	res.send('success')
})
app.get("/delete", async (req, res) => {
})

server.listen(port, () => {
	console.log(`server is listening at http://127.0.0.1:${port}`);
})
