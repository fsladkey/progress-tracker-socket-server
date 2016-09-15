var request = require("request")
var baseUrl = "http://localhost:5001/"

describe("Progress Tracker Socket Server", function() {

  describe("GET /", function() {
    it("returns status code 404", function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(404)
        done()
      });
    });
  });

  describe("POST /", function() {

    it("returns status code 404 when request is not from ruby", function(done) {
      var options = {
        url: baseUrl,
        headers: { 'user-agent': 'Chrome' }
      }

      request.post(options, function(error, response, body) {
        expect(response.statusCode).toBe(404)
        done()
      });
    });

    it("Completes request when made from ruby", function(done) {
      var options = {
        url: baseUrl,
        headers: { 'user-agent': 'Ruby' }
      }
      request.post(options, function(error, response, body) {
        expect(response.statusCode).toBe(200)
        done()
      });
    });

  });

});
