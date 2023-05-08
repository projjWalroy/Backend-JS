/*

MVC => Modd View Controller

Controller just passes the request to the Modd

Middlewire =>

Using middleware
Express is a routing and middleware web framework that has minimal functionality of 
its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), 
the response object (res), and the next middleware function in the application’s 
request-response cycle. The next middleware function is commonly denoted by a 
variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, 
it must call next() to pass control to the next middleware function. Otherwise, 
the request will be left hanging.

An Express application can use the following types of middleware:

Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware
You can load application-level and router-level middleware with an optional mount 
path. You can also load a series of middleware functions together, which creates a 
sub-stack of the middleware system at a mount point.


*/