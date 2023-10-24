import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './lib/routes'

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const router = createBrowserRouter(routes, {
  basename: isDev ? '/' : '/react-webpack/'
})

const App = () => <RouterProvider router={router} />

export default App
