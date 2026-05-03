import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddProduct from './admin/AddProduct'
import ProductList from './admin/ProductList'
import EditProduct from './admin/EditProduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/admin/add-product",
    element: <AddProduct />,
  },
  {
    path: "/admin/product-list",
    element: <ProductList />,
  },
  {
    path: "/admin/edit-product/:id",
    element: <EditProduct />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App



