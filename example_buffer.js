/*
    Pure JavaScript is Unicode friendly, but it is not so for binary data. 
    While dealing with TCP streams or the file system, it's necessary to handle octet streams. 
    Node provides Buffer class which provides instances to store raw data similar to an array of integers 
    but corresponds to a raw memory allocation outside the V8 heap.

    Buffer class is a global class that can be accessed in an application without importing the buffer module.
*/

// Creating Buffers
// Method 1: creat an uninitiated Buffer of 10 octets
var buf = new Buffer(10);
// Method 2: create a Buffer from a given array
var buf = new Buffer([10, 20, 30, 40, 50]);
// Method 3: create a Buffer from a given string and optionally encoding type
var buf = new Buffer("Simply Easy Learning", "utf-8");

// Writing to Buffers
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("Octets writter: " + len);

// Reading from Buffers
buf = new Buffer(26);
for(var i = 0; i < 26; i++){
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0 ,5));
console.log(buf.toString(undefined, 0, 5));



// Convert Buffer to JSON
var buf = new Buffer('Simple Easy Learning');
var json = buf.toJSON(buf);
console.log(json);



// Concatenate Buffers
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content: " + buffer3.toString());



// Compare Buffers
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0){
    console.log(buffer1 + " come before " + buffer2);
}else if(result == 0){
    console.log(buffer1 + " is the same as " + buffer2);
}else{
    console.log(buffer1 + " comes after " + buffer2);
}


// Copy Buffer
var buffer1 = new Buffer('ABC');

// copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());


// Slice Buffer
var buffer1 = new Buffer('TutorialsPoint');

// slicing a buffer
var buffer2 = buffer1.slice(0, 9);
console.log("buffer2 content: " + buffer2.toString());


// Buffer Length
var buffer = new Buffer('TutorialsPoint');

// length of the buffer
console.log("buffer length: " + buffer.length);