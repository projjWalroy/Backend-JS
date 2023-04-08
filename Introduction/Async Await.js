/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer 1 done");
}, 0);

for(let i = 0; i < 10000000000; i++) {
    // something
}

let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value) {   //this will go to microtask queue
    /onfulllfilement array processPromise will go
    console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");

In case of promises callbacks are sent to microtask queue.
microtask queue always given higher priority than event queue.

function dummyPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Timer's promise")
        }, 10000);
    });
}
console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer 1 done");
    let y = dummyPromise();
    y.then(function promiseY(value) {
        console.log("Whose promise ?", value);
    });
}, 0);


let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value) {
    console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");

Async Await:

we can declare function as async.

if we declare a func async it does the following
1. it allows the use of await keyword.
2. if you declare a func async, it allows consumption of a promise using await.
3. an async function always convert your 

async function processing(){
    let downloadedData = await fetchData(url);
    console.log("Downloading await completed");
    let file = await writeFile(downloadedData);
    console.log("writing await completed");
    let uploadResponse = await uploadData(file, "www.drive.google.com");
    console.log("uploading await completed");
    console.log("Completed process with response: ", uploadResponse);

    return true;
}


if we hit await altough it immedietly resolve the promise but will through you back
and it's a pending property.





If the value is not a Promise, await converts the value to a resolved Promise, and waits for it. The awaited value's identity doesn't change as long as it doesn't have a then property that's callable.

async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();

wait first always assume it is an unresolved promise.


Promise.all():

The Promise.all() static method takes an iterable of promises as input and returns a 
single Promise. This returned promise fulfills when all of the input's promises fulfill 
(including when an empty iterable is passed), with an array of the fulfillment values. 
It rejects when any of the input's promises rejects, with this first rejection reason.


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
            / console.log("hello");
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
async function processing () {
    
    
    
    return uploadResponse1 + uploadResponse2 + uploadResponse3;
}

async function process1() {
    let downloadedData = await fetchData("www.google.com");
    let file = await writeFile(downloadedData);
    let uploadResponse1 = await uploadData(file, "www.drive.google.com");
    return uploadResponse1
}

async function process2() {
    let downloadedData1 = await fetchData("www.google.com");
    let file1 = await writeFile(downloadedData1);
    let uploadResponse2 = await uploadData(file1, "www.onedrive.com");
    return uploadResponse2
}

async function process3() {
    let downloadedData2 = await fetchData("www.google.com");
    let file2 = await writeFile(downloadedData2);
    let uploadResponse3 = await uploadData(file2, "www.metabase.com");
    return uploadResponse3
}

console.log("start");
Promise.all([process1(), process2(), process3()]).then(function process(value) {
    console.log(value);
})


/ let x = process1();
/ let y = process2();
/ let z = process3();
/ x.then((v) => {
/     console.log(v);
/ })
/ y.then((v) => {
/     console.log(v);
/ })
/ z.then((v) => {
/     console.log(v);
/ })


function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = undefined;
            console.log("Download completed");
            if(typeof data == "undefined") 
                reject(data);
            else {
                resolve(data);
            }
            / console.log("hello");
            / resolve("sanket");// these lines will not be executed as promise is fulfilled only once
            / resolve(12345);
        }, 3000);
    });
}

function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download completed");
            reject(data);
            / console.log("hello");
            / resolve("sanket");// these lines will not be executed as promise is fulfilled only once
            / resolve(12345);
        }, 7000);
    });
}


let x = fetchData("fksbkvf");
x.then(function sucess(value) {
    console.log("value is", value);
}, function err(err) {
    console.log("error is", err);
})
.then(function success1(v) {
    console.log("value again is", v);
})

let x = fetchData("fksbkvf");
x.then(function success(v) {
    console.log("value is ", v);
    return 10;
} )
.then(function success1(v) {
    console.log("value again is", v);
    // throw {error: "new error"}
})
.catch(function errorHandle(err) {
    console.log("error is ", err);
})
.finally(() => {
    console.log('Experiment completed');
  });


// Tasks:
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);
            // console.log("hello");
            // resolve("sanket");// these lines will not be executed as promise is fulfilled only once
            // resolve(12345);
        }, 7000);
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file");
        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("File written successfully");
            reject(filename);
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


async function processing () {
    try {
        let downloadedData = await fetchData("www.google.com");
        let file = await writeFile(downloadedData);
        let uploadResponse1 = await uploadData(file, "www.drive.google.com");
        return uploadResponse1;
    } catch (err) {
        console.log(err);
    } 
    
}


console.log("Start")
processing();
console.log("End");

Error-first callback:

The error-first pattern consists of executing a function when the asynchronous 
operation ends (such as an incoming AJAX response) which takes as first argument 
an error, if one occurred, and the result of the request as extra arguments.


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
        fn({error: "some error"},response);
    }, 3000);
}

fetchCustom("www.google.com", function (err, response) {
    if(err) {
        console.log("error is", err);
        return;
    }
    console.log("response is", response);
})




*/