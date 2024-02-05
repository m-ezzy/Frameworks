/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:Mongoose_1@cluster0.fuyf8wf.mongodb.net/sample_mflix?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("planets");
	collection.insertOne({'name': 'venus', 'color': 'yellow'})
  // client.close();
});
*/
/*
import { MongoClient, ServerApiVersion } from "mongodb";
const client = new MongoClient('mongodb://localhost:27017/online-shopping', { monitorCommands: true });
client.on('commandStarted', started => console.log(started));
const db = client.db()
db.collection('products').insertOne({ name: 'spot', kind: 'dog' });
console.log(db)
*/

/*
import { MongoClient, ServerApiVersion } from "mongodb";
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://root:Mongoose_1@cluster0.fuyf8wf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
await client.connect()
    const database = client.db('sample_mflix');
		// console.log(database)
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    const movie2 = await movies.insertOne({'name': 'hymm for the weekend 1'});
    const movie3 = await movies.findOne({'name': 'hymm for the weekend'});
    console.log(movie3);
    await client.close();
*/

		/*
		const fruitsCollection = client.db("sample_mflix").collection("fruits");
	await fruitsCollection.insertOne({'id': 1, 'name': 'mango', 'color': 'yellow'})
  client.close();
	*/

	import { MongoClient, ServerApiVersion } from "mongodb";
	const uri = "mongodb://localhost:27017";
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
	client.connect()
	const database = client.db('online-shopping');
	const movies = database.collection('products');
	const movie2 = await movies.insertOne({"name": "caps", "price": 600});
	// const movie3 = await movies.findOne({'name': 'hymm for the weekend'});
	// console.log(movie3);
	// await client.close();
	 
	/*
	import mongoose, { connect, model, Schema } from "mongoose";
	const urii = "mongodb+srv://root:Mongoose_1@cluster0.fuyf8wf.mongodb.net/sample_mflix?retryWrites=true&w=majority";
	connect(urii, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true, serverApi: ServerApiVersion.v1 })
	const db = mongoose.connection;
	db.on('error', (err) => {
		console.log(err)
	})
	const model = model('fruits', new Schema({name: {type: String}}));
	*/
	
	/*
	const mongoose = require('mongoose')
	const uri = "mongodb+srv://root:Mongoose_1@cluster0.fuyf8wf.mongodb.net/sample_mflix?retryWrites=true&w=majority";
	const connectionParams={
			useNewUrlParser: true,
			autoIndex: true,
			useUnifiedTopology: true 
	}
	mongoose.connect(uri,connectionParams)
			.then( () => {
					console.log('Connected to the database ')
			})
			.catch( (err) => {
					console.error(`Error connecting to the database. n${err}`);
			})
	*/
	
	