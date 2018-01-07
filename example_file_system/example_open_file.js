/*
    Syntax:
    fs.open(path, flags[, mode], callback)
*/

var fs = require("fs");

// Asynchronous - Opening File
// r+ means: Open file for reading and writing. An exception occurs if the file does NOT exist
console.log("Going to open the file!");

fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log("File opened successfully!");
});