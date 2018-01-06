/*
    Node.js is a single-threaded application, 
    but it can support concurrency via the concept of event and callbacks. 
    Every API of Node.js is asynchronous and being single-threaded, 
    they use async function calls to maintain concurrency. 
    Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, 
    it fires the corresponding event which signals the event-listener function to execute.
*/

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectionHandler = function connected(){
    console.log('connection successful');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectionHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received successfully!');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended");