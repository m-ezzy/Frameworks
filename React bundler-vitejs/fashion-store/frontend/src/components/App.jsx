import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes, Navigate } from "react-router-dom"

import { UserProvider } from '../contexts/User'
import { ProductsProvider } from '../contexts/Products'

import SharedLayout from './SharedLayout'

import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'
import Login from '../pages/Login'

import ProtectedRoutes from './ProtectedRoutes'
import Account from '../pages/Account'
import Orders from '../pages/Orders'
import Cart from '../pages/Cart'

// import reactLogo from '../assets/react.svg'
// import '../styles/App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":productId" element={<SingleProduct />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="account" element={<Account />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
)

export default function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </UserProvider>
  )
}
