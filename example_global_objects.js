/*
    NodeJS global objects are global in nature and they are available in all modules
*/
console.log(__filename);

console.log(__dirname);

function printHello(){
    console.log("Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);

var t = setTimeout(printHello, 2000);
// Now clear the timer
clearTimeout(t);

// The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds
// Now call above function every 2 seconds
setInterval(printHello, 2000);