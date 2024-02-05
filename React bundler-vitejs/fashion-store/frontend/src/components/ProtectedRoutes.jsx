import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useUser } from '../contexts/User'

export default function({ children }) {
	const { user } = useUser()

  return (user ? <Outlet /> : <Navigate to="/login" />)
}
