/*
    child_process.fork method is a special case of spawn() to create Node processes

    The fork method returns an object with a built-in communication channel 
    in addition to having all the methods in a normal ChildProcess instance
*/
const fs = require('fs');
const child_process = require('child_process');

for(var i = 0; i < 3; i++){
    var worker_process = child_process.fork("example_support_fork.js", [i]);

    worker_process.on('close', function(code){
        console.log('Child process exited with code ' + code);
    });
}