const request = require('request');
const fs = require("fs");

// assign process.argv selected values to path and domain variables;
const path = process.argv[3];
const domain = process.argv[2];

// run the request command and assign the error, response, body
// - based off the console input for domain and write the output using fs to
// a file "path" - based from 2nd input from console.
request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});