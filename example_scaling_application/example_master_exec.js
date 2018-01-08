/*
    exec - child_process.exec method runs a command in a shell/console and buffers the output
*/

const fs = require('fs');
const child_process = require('child_process');

for(var i = 0; i < 3; i++){
    var workerProcess = child_process.exec('node example_support.js ' + i, function(error, stdout, stderr){

        if(error){
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }

        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function(code){
        console.log('Child process existed with exit code ' + code);
    });
};