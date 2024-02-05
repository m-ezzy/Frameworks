import { Router } from 'express'

import * as productsController from './controllers/products.js'

const routes = Router()

routes.use((req, res, next) => {
	// console.log(req)

  res.header("Access-Control-Allow-Origin", "http://localhost:5173")
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173")
	res.header("Access-Control-Allow-Headers", 'Access-Control-Allow-Origin, Content-Type')
  res.header("Access-Control-Allow-Credentials", true)

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
    return res.status(200).json({})
  }
  next()
})

// routes.post("/signup", authController.signup)
// routes.post("/login", authController.login)
// routes.post("/select", controllers.select)
// routes.post("/delete", controllers.delete)

routes.post("/products", productsController.getAll)
// routes.post("/cart", cartController.getAll)
// routes.post("/orders", ordersController.getAll)

// routes.post("/admin/products", productsController.getAll)
// routes.post("/admin/orders", ordersController.getAll)

export default routes
