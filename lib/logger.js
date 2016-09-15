module.exports = {

  log(req, res) {
    console.log('-------------------------------')
    console.log(`${req.method} - '${req.url}'`)
    console.log(`Completed ${res.statusCode}.`)
    console.log()
  }

}
