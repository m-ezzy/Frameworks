import { createContext, useContext, useState } from 'react'
// import { fetchData } from '../utils/tools'

const UserContext = createContext({})

export function useUser() {
	return useContext(UserContext)
}
export function UserProvider({ children }) {
	const [user, setUser] = useState(null)

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
