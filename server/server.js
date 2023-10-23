const express = require('express')
const ReactDOMServer = require('react-dom/server')
const {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider
} = require('react-router-dom/server')

const createFetchRequest = require('./request')
const routes = require('../src/lib/routes').default

const app = express()
let handler = createStaticHandler(routes)

app.get('*', async (req, res) => {
  let fetchRequest = createFetchRequest(req)
  let context = await handler.query(fetchRequest)

  let router = createStaticRouter(handler.dataRoutes, context)
  let html = ReactDOMServer.renderToString(
    <StaticRouterProvider router={router} context={context} />
  )

  res.send('<!DOCTYPE html>' + html)
})

app.listen(3010, () => {
  console.log('App is launched')
})
