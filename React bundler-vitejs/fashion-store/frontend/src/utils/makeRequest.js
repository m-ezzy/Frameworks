// import { server } from '../../../config.json'

const server = {
	protocol: "http",
	hostname: "localhost",
	port: 8000,
}
export default async function(route, data) {
	const response = await fetch(`${server.protocol}://${server.hostname}:${server.port}${route}`, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json"
		},
		body: data
	})
	const result = await response.json()
	console.log("----------fetch----------", result)
	return result
}
