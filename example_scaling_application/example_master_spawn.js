/*
    child_process.spawn method launches a new process with a given command

    The spawn() method returns streams (stdout &stderr) and it should be used 
    when the process returns a volume amount of data
*/

const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['example_support_spawn.js', i]);

    workerProcess.stdout.on('data', function(data){
        console.log('stdout: ' + data);
    });

    workerProcess.stderr.on('data', function(data){
        console.log('stderr: ' + data);
    });

    workerProcess.on('close', function(code){
        console.log('child process exited with code ' + code);
    });
}
