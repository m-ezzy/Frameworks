import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useProducts } from '../contexts/Products'

export default function SingleProduct() {
	const { products } = useProducts()
	const location = useLocation()

	if(!products) {
		return <div>Loading...</div>
	}

	const product = products.find((p) => { return p._id == location.pathname.split('/')[2] })
	if(!product) {
		return <div>Product not found</div>
	}
	
	return (
		<div>
			{product.title}
			{product.category}
			{product.description}
		</div>
	)
}
