/*
Scopes is where to look for things.
1. Global
2. Function
3. Block

let, var, const

var: whenever we use a var anywhere inside a function, the varible gets function scope. if we use it
outside a function, no matter if it enclosed in a block it will give global scope.

let: whwenever we initialize a varible with let it always gets scope of enclosing block. 
only accesable after declaration.
if we declare outside any block it does not get complete global scope.

let does not allow redeclaration but var allows it.

const: it also has same block scope as let but no reassignment.

So, we know that Javascript is not interpreted it is definetly is a hybrid that is compile and interpreted 
so, whenever we try to execute a javascript code, js first parses the whole code in this pasring phase it assigns a 
scope to varibles / func once done, then it reads the code and executes it.


    Phase 1 - Parsing   (only stores variable which is formaly declared)
    Phase 2 - Execution

Autoglobals: In Javascript if we keep searching scope of the varible and cannot find it
then it gets global scope. and gets value gets assigned to it. This happens during execution
phase.

undefined is a varible state where scope already know about it but in execution phase we have not allocate its
value.
undeclared is a varible state where we never formally declared and never assigned a value

Hoisting:

It is a direct consequence of lexical parsing that happens in JS,
due to which we are able to access some

"use strict";
-> autoglobal scope is prohibitated.

IIFE : Immidietly invoke function expression

if the first word is not function then that is function expression.



*/