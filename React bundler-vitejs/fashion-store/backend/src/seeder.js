import User from './models/user.js'
import Product from './models/product.js'
import Order from './models/orderModel.js'

import users from './data/users.js'
import products from './data/products.js'

const importData = async () => { //loadDataIntoDatabase
	try {
		const createdUsers = await User.insertMany(users)
		const adminUser = createdUsers[0]._id
		const sampleProducts = products.map(product => {
			return {
				...product,
				user: adminUser
			}
    });
    await Product.insertMany(sampleProducts);
		console.log("Sample date was uploaded".green.bold);
  } catch (error) {
		console.log(`${error.message}`.red.inverse);
  }
}
const deleteData = async () => { //clearDatabase //deleteDatabase
	try {
		await Order.deleteMany()
		await Cart.deleteMany()
		await Review.deleteMany()
		await User.deleteMany()
		
		console.log("Sample date was deleted")
	} catch (error) {
		console.log(`${error.message}`.red.inverse)
  }
}

export { importData }
