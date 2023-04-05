/*
In js we can pass function as an argument.

Function expression are of two types
1. Anonymous - which do not have a name
2. Names

Ananonymous func is hard to debug.

console.trace()

arguments.callee:-

function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);

but:

[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : what goes here? (n - 1) * n;
});

[1, 2, 3, 4, 5].map(function (n) {
    return n <= 1 ? 1 : what goes here? (n - 1) * n;
  });
  
did not. To get around this arguments.callee was added so you could do

[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});





*/