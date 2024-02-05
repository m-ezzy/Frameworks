import { createContext, useContext, useEffect, useState } from 'react'
import makeRequest from '../utils/makeRequest.js'

const ProductsContext = createContext({})

export function useProducts() {
	return useContext(ProductsContext)
}
export function ProductsProvider({ children }) {
	const [products, setProducts] = useState(null)

	useEffect(() => {
		async function getData() {
			let data = await makeRequest("/products")
			setProducts(data)
		}
		getData()
	}, [])

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	)
}
