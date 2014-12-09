var port = process.env.PORT || 3000,
    http = require("http"),
    fs = require("fs");
    //html = fs.readFileSync("public/index.html");

var server = http.createServer(function (req, res) {
    console.log('url: ' + req.url);
    if (req.method == 'POST') {
        req.on('data', function(chunk) {
            fs.appendFile("/tmp/sample-app.log", chunk.toString() + "\n", function (err) {});
        });

        req.on('end', function() {
            res.writeHead(200, "OK", {'Content-Type': 'text/html'});
            res.end();
        });
    } else {
        // response.writeHead(200);
        // response.write(html);
        // response.end();

        if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'

          fs.readFile(__dirname + '/public/index.html', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });

        }

        else if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

          fs.readFile(__dirname + '/public/js/script.js', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
          });

        }

        else if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'
            console.log('got css request');
          fs.readFile(__dirname + '/public/css/construction.css', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          });

        }

        else {
            console.log('got empty (html) request');
            fs.readFile(__dirname + '/public/index.html', function (err, data) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
              });
        }
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + port + "/");