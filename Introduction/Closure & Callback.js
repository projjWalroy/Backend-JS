/*

SetTimeout  SetInterval

These two functions are not by default given to us.

SetTimeour:

it is a func that heps to execute some task after certain timer.


SetInterval:

it is a func that help us to execute some task again & again after a given interval.


Callback:

it is a func that is passed to another function, 
when a func is passed as an argument

let arr = [1,2,3,4,5];
let x = arr.map(function process(v, i) {
     * v -> value
     * i -> index
    console.log(v, i);
    return v*v;
});

console.log(x)
console.log(arr);

function fun(x, fn) {

      x -> number
      fn -> callback function

    // some logic
    for(let i = 0; i < x; i++) {
        console.log(i);
    }
    fn(); // calling the callback function passed
    // some more logic
}


 fun(10, function log() {
     this is the call back function
     console.log("Custom logger");
 });

 fun(20, function () {
    console.log("anonymous logger")
 });

let g = function process() {
    console.log("inside g");
    return function () {console.log("returned function")}
}

function gun() {
    console.log("inside gun");
}

fun(15, gun);
fun(2, g());// -> fun (2, undefined)

function expression might be anonymous

function mapper(arr, fn) {
    
     * arr -> is going to be an array of elementsd
     * fn -> callback function which expects two arguments value and index
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        i-> index, arr[i] -> value
        let res = fn(arr[i], i);
        result.push(res);
    }
    return result;
}

let arr = [1,2,3,4,5];
let x = mapper(arr, function cuber(v, i) {
    console.log(v, v*v*v, i);
    return v*v*v;
});

console.log(x, arr)


SetTimeout:

setTimeout(function execute() {
    // some task
    console.log("task completed");
}, 7000);

it returns a unique id.

clearTimeout(id) removes the first timer corresponding to unique id get revoked.

let id1 = setTimeout(function execute1() {
    // some task
    console.log("task completed 1");
}, 10000);

let id2 = setTimeout(function execute2() {
    // some task
    console.log("task completed 2");
    clearTimeout(id1);
}, 5000);





*/