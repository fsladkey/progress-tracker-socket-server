const app = require('http').createServer(handler)
const io = require('socket.io')(app)
const PORT = process.env.PORT || 5001

app.listen(PORT)
console.log(`listening on ${PORT}`)

function handler(req, res) {
  if (isValid(req)) {
    res.writeHead(200)
    io.emit('updateAvailable')
    res.end()
  } else {
    res.writeHead(404)
    res.end()
  }
}

function isValid(req) {
  return req.method === "POST" && req.headers["user-agent"] === "Ruby"
}
