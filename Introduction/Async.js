/*

Javascript is a single threaded language
it does not support multithreading, and js bydefault only support synchronous code execution.

The above property of sync code execution only works for operation natively known 
to javascript.

console.log("Start");
setTimeout(function exec() {
    console.log("Task done");
}, 7000);
console.log("End");

setTimeout is not a feature of javascript.

JS Runtime:

Js was made only to run inside browser only, js need a execution enviroment plus js engine
browser act as a runtime, js alone is very week. and technically we cannot run it without 
dedicated enviroment.

Node is a javascript runtime, same engine as chrome browser uses. (file system, processs)

function process() {
    console.log("Start");
    setTimeout(function exec() {
        console.log("Executed some task1")
    }, 5000);
    setTimeout(function exec() {
        console.log("Executed some task2")
    }, 5000);
    for(let i = 0; i < 100000; i++) {
        // some task
    }
    console.log("End");
}

process();
console.log("TATA");

**** So there are Call stack, event loop, event queue, runtime

In the upper code setTimeout will go to the runtime afte 
the assigned time it will come to the event queue and event loop will execute this and 
check for condition. The moment it will true it pops out from queue and execute this.

The condition to start executing task from event queue is 
1.the call statck should be empty 
so that no function in calll stack left to be executed.
2. the global piece of code should be completed.(Ex: console.log("End");)

runtime cannot interrupt the flow.











*/