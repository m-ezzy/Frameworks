import { createServer } from 'http'
import express from "express"
// import cookieParser from "cookie-parser"
// import cors from 'cors'
import dotenv from 'dotenv'

import connectDatabase from "./database.js"
import routes from './routes.js'

const port = process.env.PORT || 8000
const app = express()
// const httpServer = createServer(app)

dotenv.config()

connectDatabase().then(() => {
	// seeder()
})

// app.use(cors({credentials: true, origin: 'http://localhost:5173'}))

// Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded( {extended: true} ));

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
	console.log(`server is listening on port ${port}`)
})
