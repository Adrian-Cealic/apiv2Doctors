var jsonSever = require('json-server')
var server = jsonSever.create()
var routher = jsonSever.router('db.json')
var middlewares = jsonSever.defaults()

server.use(middlewares)
server.use(routher)

server.listen(3000, function () {
  console.log('JSON Server is running on port 3000')
})