/*


Node: ->

multiple library combined togather makes framework.

Node is not a framework and not a language. Django is a framework.

Node is Runtime enviroment for JS.

Node give us use of command line argument.

__dirname -> this shows directory name, but not always accesible


Module:

Module Patterning-

module types
1. common js module
2. ES6 module

module is an object

to import :

consts importing = require(relative_path);

.mjs file extension is compatible with es6, and we can use import keyword.

when we importing module it runs the js file which exports.


Package:

It is a folder which contains package.json file.

JSON - 

https://nodejs.org/api/packages.html


In ES 6 module :

export types-
1. default export function 
2. export{}
3. use cjs extension 

import types-
1. import default_import name, {name_export} from "path" ;

export function linearSearch(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            return i;
        }
    }
    return NaN;
}

function binarySearch(arr, x) {
    / some impl
}
console.log("Ending searching");
/ module.exports = {
/     linear: linearSearch,
/     binary: binarySearch
/ }
/ export default function fun() {
/     console.log("fun")
/ }
export default {
    binarySearch,
    fun: function () {console.log("fun")}
}


import searching, {linearSearch} from './searchingalgo.js'
/ const x = require('./searchingalgo.js')
console.log(searching, linearSearch)



if we want to do module.export in type=module we have to make it .cjs


How can we prepare command line script??










*/
console.log("Hello");
console.log(process);