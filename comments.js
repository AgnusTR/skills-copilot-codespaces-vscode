// Create web server
// 1. Load the http module
const http = require('http');
const fs = require('fs');
const path = require('path');

// 2. Create a web server
http.createServer((req, res) => {
    // 3. Get the file name
    let fileName = path.basename(req.url);
    console.log(fileName);
    // 4. Read the file
    fs.readFile( fileName, (err, data) => {
        // 5. Write the file
        res.write(data);
        res.end();
    }
    );
}
).listen(8080);
console.log('Server is running at http://localhost:8080');
