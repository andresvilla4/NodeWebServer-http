const http = require('http');
const fs = require('fs').promises;
const port = 3000;

let indexFile;

// Present html file on WebPage
const requestListener = function(req, res) {
    res.setHeader("Content-type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

// Create server
const server = http.createServer(requestListener);

// Read html file and put the server on listening
fs.readFile(__dirname + '/UI/index.html')
    .then(contents => {
        indexFile = contents;
        server.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });