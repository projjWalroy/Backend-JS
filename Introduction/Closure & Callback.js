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


function todo(task){
    setTimeout(function fun(){
        console.log("completed", todo);
    },2000);
}
console.log("starting");
/todo("assignment");
console.log("Ending");

So here setTimeout is executing after the code is finishing,
so how it is accesing the task.

This happens due to closure, closure is when a function "remembers" it's lexical scope even
when the function is executed outside the lexical scope.

every varible that passed into the function gets function scope

"closure" is about "remoembering". from where the varible is coming

function todo(task)
{
    console.log("Starting todo");
    setTimeout(function fun(){
        console.log("completed",task);

    },5000);
    task = "dayananda";
    console.log("end of todo");
}
console.log("Starting");
/todo("assignments");
console.log("Ending");

A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function's variables — a scope chain. Closures in Javascript are created along with the function. Lexical scoping is the environment that holds the variables of the current scope as well as the outer scope.

A function remembers its lexical scoping that is called CLOSURE.
 

 

function test() {
    for(var i = 0; i < 3; i++) {  //var has function scope but let have block scope
        setTimeout(function exec() {
            console.log(`i : ${i}`); // 'i: ' + i
        }, i*1000);
    } 
}

test();

var has function scope means for a for loop the the value of i changes for all.
let has block scope means it does not changes it value for every block.

const add = (function exec(){
    let count = 0;
    
})

*/