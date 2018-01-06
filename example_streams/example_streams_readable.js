/*
    Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −

        Readable − Stream which is used for read operation.

        Writable − Stream which is used for write operation.

        Duplex − Stream which can be used for both read and write operation.

        Transform − A type of duplex stream where the output is computed based on input.

    Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are −

        data − This event is fired when there is data is available to read.

        end − This event is fired when there is no more data to read.

        error − This event is fired when there is any error receiving or writing data.

        finish − This event is fired when all the data has been flushed to underlying system.
*/

var fs = require('fs');
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function (chunk) {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Readable Stream Completed");