# Medusa.js

*a configable lib to detect user browser environments*

~~author: GLaDOS-096~~

<br>

## Project Structures

```
Medusa.js
    medusa.js    // used to compile bundles
    test
        medusa-test-serer.js    // static file server for Medusa tests
        medusa-test.html    // show test results directly on pages
        medusa.test.js    // the immitated compiled version of Medusa.js
    target
        medusa.core.js    // only the extension system
        /* supposed to be compiled version here */
    modules
        user_agent_check.js    // basic module for checking user-agent of requests
        ie_spec.js    // specify something which only works on IE
        /* supposed to be more modules here */
```

<br>

## APIs

`Medusa.extend(module_name)`

This is the core function of Medusa, which uses it to load modules. These modules are actually function arrays. Examples are shown later.


`Medusa.${function_name}`

This is how to use the modules right after `Medusa.extend()`. If we have a `function a(){}` in the module, we just use it as `Medusa.a()`.

<br>

## Module System

As we have said above, the modules for Medusa are function arrays, that is to say a module looks like this:
```
var $module_name = [
    function $module_function_name($params){
        // code here
    },
    function $module_function_name($params){
        // code here
    },
    ...
]
```
I have to inform that Medusa module system does not support anonymus functions, which means if anonymus functions are used such as `(function(){})()` or `let a = function(){}`, an error will be thrown by Medusa.