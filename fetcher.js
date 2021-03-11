// Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.

// Use the request library to make the http request.

// Use Node's fs module to write the file

// Use the callback based approach we've been learning so far

// Do not use the pipe function

//Do not use synchronous functions 
const request = require('request');
const fs = require('fs');

// create a variable that requests a domain name from the terminal. Use process.argv[2] to turn it into a string, not .slice[2] which keeps it as an array.
const domainName = process.argv[2];
// create a variable that requests the file path in with fs.writeFile. This allows us to call the filePath to which the data from domainName will be stored.
const filePath = process.argv[3];


const result = function (domainName, filePath) {
// this is where the user will put in a http:// url in the terminal that will log an error if any error returns and ultimately stop the function and wont move on to writing the file. 
  request(domainName, (error, response, body) => {
    if (error) {
      console.log(`Failed to download, ${error}!`);
      return;
    } 
  // If the information does not throw an error, log the data about the URL into a specified file.ls
  fs.writeFile(filePath, body, function (error) {
    //throw an error if it is not able to get the data
    if (error) {
      console.log(`Failed to write, ${error}!`);
    } else {
      // if it is able to get the data, log the value that was saved. I used body.length to grab the bytes of the body total.
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
  });
});
}
// call the function
result(domainName, filePath);

