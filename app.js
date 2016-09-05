const app = require('http').createServer(handler)
const io = require('socket.io')(app)
const PORT = process.env.PORT || 5001

app.listen(PORT)
console.log(`listening on ${PORT}`)

function handler(req, res) {
  if (req.method === "POST") {
    res.writeHead(200)
    io.emit('updateAvailable')
    res.end()
  } else {
    res.writeHead(404)
    res.end()
  }
}
