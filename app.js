const app = require('http').createServer(handler)
const io = require('socket.io')(app)
const PORT = process.env.PORT || 5001

app.listen(PORT)
console.log(`listening on ${PORT}`)

function handler(req, res) {
  res.writeHead(200);
  console.log('broadcasting update');
  io.emit('updateAvailable')
  res.end();
}
