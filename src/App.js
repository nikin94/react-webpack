import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './lib/routes'

const router = createBrowserRouter(routes)

const App = () => <RouterProvider router={router} />

export default App
