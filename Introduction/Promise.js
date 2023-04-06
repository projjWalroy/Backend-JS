/*

console.log is bydefault not part of ECMAScript.
its a runtime based feature.**

when we do console.log in nodejs internally it call process.stdout

Disaddvaantages of Callback:

1. callback hell
   code readability gets hamparred.

2. inversion of control
   if you loss the control of some part of your code and whose control you passed to someone else
   and you dont know how that part will be executed.

function fun(inputString, fn) {
    / internal function
    / executes some algorithm on the string
    let output = inputString.split(','); // output is an array
    for(let i = 0; i < output.length; i++) {
        fn(output[i]);
        fn(output[i]);
    }
}


/ using it

fun("name:sanket,subject:cse", function process(ip) {
    let arr = ip.split(":");
    console.log("{", arr[0], " => ", arr[1], "}");
});


Promise:

Promises are special js object that are also considered readability enhancers. THey get immediate
returned from a function setup to return a promise.
They act as place holder for the data we hope to get back from some future task.
we also attach the functionality we want to differ until the future task is done.
And promise object autometically handels execution of this functionality.

Promisses do 2 thing
1 inside js
2. outside js

it sings up the process requires to run in the runtime and gives a placeholder in javascript
which has a value property.

1. How to create a promise?
2. How to consume a promise?

/ Tasks:
/ 1. Write a function to download data from a url
/ 2. Write a function to save that downloaded data in a file and return the filename
/ 3. Write a function to upload the file written in previous step to a newurl

function fetchCustom(url, fn) { // we are mimicing the function
    / download content of the url
    / this downloading can take sometime, 
    / we will download the content from url, and then whatver is the result, we will pass to the callback
    console.log("Starting downlaoding from", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
    }, 3000);
}

function writeFile(data, fn) {
    / this function writes data in a new file
    console.log("Started writing data", data);
    setTimeout(function process() {
        console.log("Writing completed");
        let filename = "output.text";
        fn(filename);
    }, 4000);
}

function uploadFile(filename, newurl, fn) {
    console.log("Upload started");
    setTimeout(function process() {
        console.log("File", filename,  "uploaded successfully on", newurl);
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
    }, 2000);
}


fetchCustom("www.google.com", function downloadCallback(response) {
    console.log("Downloaded response is", response);
    writeFile(response, function writeCallback(filenameResponse) {
        console.log("new file written is", filenameResponse);
        uploadFile(filenameResponse, "www.drive.google.com", function uploadCallback(uploadResponse) {
            console.log("Successfully uploaded", uploadResponse);
        });
    });
});


Promises are special javascript object.

How promises work behind the scene?

The promise object that we create that have 4 major properties 
1. Status
2. Value
3. onfullfillment
4. onReject


1. Status/state: status shows current promise status
   1. pending state  -- still ongoing
   2. fullfill state -- success
   3. rejected state -- error

2. value:  when status of the promise is pending, this value property is undefined.
   the moment the promise is resolved the value property is updated from undefined to the 
   new value, (this value we can consider as the returned value)
   so the value property acts like placeholder till the time promise is finished.

3. onfullfillment[]: This is an array which contains functions that we attach to our
promise object. (To a promise object we can attach some function using .then() method)
when the value property is updated to new value js gave chanche to this attach funccc one by
one the value property as their argument as there no piece of code left in call stack.


*/