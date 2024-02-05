import mongoose, { createConnection, connect } from 'mongoose'
import colors from 'colors'

import products from '../data/products.js'

import Product from './models/product.js'

// const connectDatabase = async () => {
async function connectDatabase () {
	// 1st way
	/*
	try {
		const client = await connect(process.env.MONGODB_URI, {
			useUnifiedTopology: true,
			// useCreateIndex: true,
      useNewUrlParser: true
    })
		console.log(client.connection.host)
    console.log(`MongoDB connected ${client.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse)
    process.exit(1)
  }
	*/

	// 2nd way
	// const client = connect(process.env.MONGODB_URI, {
	const conn = await createConnection(process.env.MONGODB_URI, {
		useUnifiedTopology: true,
    useNewUrlParser: true,
  })
	.asPromise();

	console.log(`${conn.db.databaseName}`.bgGreen);

	// await conn.dropDatabase()
	
	// mongoose.connection.db.dropDatabase()

	// conn.db.createCollection("Product")

	console.log((await Product.find({})).length);

	await Product.insertMany(products);

	console.log((await Product.find({})).length);

	// .then(console.log("successful connection with the database server"))
	// .catch(console.error);
}

export default connectDatabase
