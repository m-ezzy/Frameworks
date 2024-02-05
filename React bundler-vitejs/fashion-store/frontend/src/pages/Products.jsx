import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../contexts/Products'
import makeRequest from '../utils/makeRequest'

// export default () => {
// export default Products = () => {
// export default function() {
export default function Products() {
	// const [productsData, setProductsData] = useState(null)
	const { products, setProducts } = useProducts()
	/*
	useEffect(() => {
		async function getData() {
			let data = await makeRequest("/products")
			setProducts(data)
		}
		getData()
	}, [])*/

	let productItems = []
	let categoryItems = []

	if(products) {
		let categories = []
		
		products.forEach(p => {
			if (categories.includes(p.category) == false) {
				categories.push(p.category)
			}
		})
		categoryItems = categories.map((c) => {
			return <div>{c}</div>
		})
		productItems = products.map((p) => {
			return (
				<Link to={p._id} key={p.id}>
					<img src={p.image} />
					<div>{p.category}</div>
					<div>{p.title}</div>
					{p.stock ? 
						<div className="available">Available</div> : 
						<div className="out-of-stock">Out of Stock</div>
					}
				</Link>
			)
		})
	}
	return (
		<div className='page'>
			<div className='categories'>{categoryItems}</div>
			<div className='products'>{productItems}</div>
		</div>
	)
}
