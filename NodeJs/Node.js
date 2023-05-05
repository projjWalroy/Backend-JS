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


import searching, {linearSearch} from './searchingalgo.js'  /first one is default export
/ const x = require('./searchingalgo.js')
console.log(searching, linearSearch)



if we want to do module.export in type=module we have to make it .cjs

/refer online article


How can we prepare command line script??

#!/usr/bin/env node

then we dont write to add node during terminal to run this code

console.log(process.argv);

console.log(process.argv[2].split("=")[1]);

process.stdout.write("hi");
process.stdout.write("+ 2");



Packagge maneger manage installation, dependencies, version control.

import {readFile, writeFile} from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath, { encoding: 'utf8' });
console.log(typeof contents);  //string
const data = {
    title: 'my title',
    body: 'my data'
}

for(const [key, value] of Object.entries(data)) {
    contents = contents.replace(`[${key}]`, value);
}

await writeFile(new URL('./index.html', import.meta.url), contents);


/The await operator is used to wait for a Promise and get its fulfillment value. 
/It can only be used inside an async function or at the top level of a module.


we cant use await inside a function.(ES6)

Stream:-

const fs = require('fs');
const transformStream = require('stream');
let fileStream = fs.createReadStream(__dirname + "/input.txt");
let outputStream = process.stdout;
/ readstream.pipe(writestream)
let middleStream = new transformStream.Transform({
    transform(chunk, enc, nextCB) {
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB, 1000);
        / nextCB();
    }
});
/ fileStream.pipe(outputStream);
let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);

*/
console.log("Hello");
console.log(process);