// Load the filesystem module
const fs = require('fs')

// Read file asynchronously
fs.readFile('introduction.txt', "utf-8", (err, data) => {
    if(err) {
        console.error('Error reading file: ' + err);
        return;
    }
    console.log('File content: ' + data);
});

console.log('Reading file... (this runs first!)');

/*
In this example:
1. We load the built-in `fs` module
2. We call `readFile` to read a file
3. Node.js continues to the next line while reading the file
4. When the first is read, our callback function runs

*/