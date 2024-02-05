import Product from "../models/product.js"

import { connectDB } from "../database_mongodb.js"

// const controllers = {}

export async function getAll(req, res) {
	// let db = await connectDB()
	// console.log(4444444444444444444444, db)

	// await db.collection("products").insertOne({ category: "fashion", title: 'cap', stock: 150 }, (err, result) => {})

	// console.table(db.collection("products").find({}).filter({}))

	// let data = await db.collection("products").find({}).toArray()
  // db.close()
  // console.log(data)
	// res.json(data)

	// Product.insertMany([{ category: 'electronics', slug: 'hi' }])

	const products = await Product.find({})
  res.json({ products })
}

// export default controllers
