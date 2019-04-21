// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('src/db.json');
// // const router = jsonServer.router(require('./jsonServer.js')());
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3333;

// server.use(middlewares);
// server.use(router);

// server.listen(port, function () {
//   console.log('JSON server is running');
// });

// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('src/db.json')
var middlewares = jsonServer.defaults()
const port = process.env.PORT || 3333;

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  /*
  if (req.method === 'POST') {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = 'GET'
    req.query = req.body
  } */
  // Continue to JSON Server router
  next()
})

// If you need to scope this behaviour to a particular route, use this
server.post('/comments', function (req, res, next) {
  req.method = 'GET'
  req.query = req.body
  next()
})

server.use(router)
server.listen(port, function () {
  console.log('JSON Server is running')
})


