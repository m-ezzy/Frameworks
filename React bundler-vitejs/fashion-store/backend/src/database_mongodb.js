import { MongoClient } from "mongodb"

const url = 'mongodb://127.0.0.1:27017'
const dbname = "market"

// let client = new MongoClient(url)

export async function connectDB() {
	let client = await MongoClient.connect(url, {
		useNewUrlParser: true,
    useUnifiedTopology: true,
	})
	// console.log(11111111111111111111111111, client)
	// let client = await connection.connect(url)
	let database = client.db(dbname)
	console.log(22222222222222222222222222, database)

	// let dbo
	/*
	(err, client) => {
		if(err) {
			console.error(err)
			throw err
		}
		console.log("successful connection with the database server")
	*/
	// dbo = client
	// }).catch(console.error)
	return database
}
