import { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

export default function SharedLayout() {
	const [page, setPage] = useState(null)

	const location = useLocation()

	console.log(location, location.pathname)

	return (
		<div className="app">
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/products">Products</Link>
				<Link to="/login">Login</Link>
				<Link to="/cart">Cart</Link>
				<Link to="/orders">Orders</Link>
			</nav>
			<Outlet></Outlet>
    </div>
	)
}
