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

Creating Promise object:

  return new Promise(function(resolve,reject){
    /promise takes a callback function as an argument
    /the callback passed inside promise expect two arguments resolve, reject
    /write logic in callback
  })

  if you want to return something on successthen calll resolve function with whatever value
  we want to return.

  / how can we write a function to download some data from a url, and not use callbacks
/ instead use promises ? 
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from ", url);
        setTimeout(function process() {
            let data = "Dummy data";
            console.log("Completed fetching the data");
            / somehow we need to return the data ? - TODO 
            resolve(data); // return some data on success 
        }, 4000);
    });
}


function fetch1(url) {
    return new Promise(function (resolve, reject) {
        / any logic
        for(let i = 0; i < 10000000000; i++) {
            / some task
        }
        console.log("Completed");
        resolve("sanket");
    });
}

if we call resolve() func then we consider it fulfilled.
vice-e-versa reject().

function demo1() {
    return new Promise(function (resolve, reject) {
        console.log("hi");
        setTimeout(function process() {
            console.log("wohoo, task done");
            resolve("Students are the best");
        }, 10000);
        console.log("by");
    })
}

function demo2(val) {
    return new Promise(function (resolve, reject) {
        console.log("Start");
        setTimeout(function process() {
            console.log("Completed timer");
            if(val%2 == 0) {
                / even number
                resolve("Even");
            } else {
                / odd number
                reject("Odd");
            }
        }, 10000);
        console.log("Somewhere");
    });
}

 promise is said to be settled if it is not pending, i.e. if it is either fulfilled or rejected.


function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("going to start the download");
        setTimeout(function process() {
            let data = "Dummy downladed data";
            console.log("download completed");
            resolve(data);
        }, 10000);
        console.log("Timer to mimic download started");
    });
}

console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x = fetchData("www.google.com");
console.log("New promise object created successfully, but downloading still going on");
console.log(x);


Consuming a promise:

The promise consumption is the main beauty. using which we will avoid inversion of control
whenever we call a function returning a promise we will get a promise object which is like any
js object that we can store in a variable.

/ Tasks:
/ 1. Write a function to download data from a url
/ 2. Write a function to save that downloaded data in a file and return the filename
/ 3. Write a function to upload the file written in previous step to a newurl

function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);
            console.log("hello");
            / resolve("sanket");// these lines will not be executed as promise is fulfilled only once
            / resolve(12345);
        }, 7000);
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file");
        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("File written successfully");
            resolve(filename);
        }, 3000);
    });
}

function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    });
}

/ let data = fetchData("www.datadrive.com");
/ let filename = writeFile(data);
/ let response = uploadData(filename, "www.drive.google.com");
/ the above will not work in reqd fashion


/ let downloadPromise = fetchData("www.datadrive.com");
/ downloadPromise.then(function processDownload(value) {
/     console.log("Download promise fulfilled");
/     let writePromise = writeFile(value);
/     writePromise.then(function processWriting(value) {
/         console.log("writing done");
/         console.log("filename is", value);
/     })
/ })
/ above piece of code solves inversion of control but still gets promise hell

/ let downloadPromise = fetchData("www.datadrive.com");
/ x = downloadPromise
/ .then(function processDownload(value) {
/     console.log("Downloading is done with the following value", value);
/     // return "Sanket";
/ });


/ x.then(function process(value) {
/     console.log("x promise value is",value);
/ })

console.log("Start")
let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
.then(function processDownload(value) {
    console.log("donwloading done with following value", value);
    return value;
})
.then(function processWrite(value) {
    return writeFile(value);
})
.then(function processUpload(value) {  // value is what is previous returned by .then()
    return uploadData(value, "www.drive.google.com");
})
.then(function process() {
    console.log("done");
})

console.log("Ended");

let downloadPromise = fetchData("www.datadrive.com");

if creation of promise involved async piece of code it will wait otherwise not.

now technically when promise gets resolved we have to perform some function.
we can use .then() func on promise object to bind the function we want to execute once we ful
-filled a promise, .then() takes function as an argument that we want to execute after 
function fullfieled and argument function takes value property as parameter.

*only one resolve work as promise is fulfilled only once.

.then() itself return a new promise

with chaining of .then() we can catch previous returned promise



*/