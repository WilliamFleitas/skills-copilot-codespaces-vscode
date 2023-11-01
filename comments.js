// Create a web server
// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var fs = require('fs');
var comments = require('./comments.json');
var qs = require('querystring');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  var query = url.parse(request.url).query;
  var queryObj = qs.parse(query);
  var body = '';
  if (path == '/comments' && request.method == 'GET') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(JSON.stringify(comments));
  } else if (path == '/comments' && request.method == 'POST') {
    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function() {
      var jsonObj = JSON.parse(body);
      comments.push(jsonObj);
      fs.writeFile('./comments.json', JSON.stringify(comments), function(err) {
        if (err) throw err;
        console.log('It\'s saved!');
      });
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(JSON.stringify(comments));
    });
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('404 Not Found\n');
  }
});

// Listen on port 8000, IP defaults to
