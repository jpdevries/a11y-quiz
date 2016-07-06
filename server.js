var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var bank = require('./assets/js/plugins').bank;
var calculateScore = require('./assets/js/plugins').calculateScore;
var scoreMessage = require('./assets/js/plugins').scoreMessage;

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get'  && req.url == "/") {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post'  && req.url == "/score") {
        processAllFieldsOfTheForm(req, res);
    } else {
      var done = finalhandler(req, res);
      serve(req, res, done);
    }

});

function displayForm(res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      var userInput = [];

      for (var key in fields) {
        var value = fields[key];
        userInput.push([key,value]);
      }

      var score = calculateScore(userInput,bank);
      var message = scoreMessage(score,fields.numquestions || 10);

      //Store the data from the fields in your data store.
      //The data store could be a file or database or any other store based
      //on your application.
      res.writeHead(200, {
        'content-type': 'text/html'
      });
      res.write('<h1>Your Score</h1>');
      res.end('<p>' + message + '</p>');
    });
}


server.listen(process.env.PORT || 1185);
console.log("server listening on " + (process.env.PORT || 1185));
console.log("Visit http://localhost:" + (process.env.PORT || 1185) + " in your browser");
