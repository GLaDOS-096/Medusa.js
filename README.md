# Medusa.js

*a configable lib to detect user browser environments*

~~author: GLaDOS-096~~

<br>

## Project Structures

```javascript
Medusa.js
    medusa.js    // used to compile bundles
    test
        medusa-test-serer.js    // static file server for Medusa tests
        medusa-test.html    // show test results directly on pages
        medusa.test.js    // the immitated compiled version of Medusa.js
    modules
        medusa.core.js    // core function of Medusa.js
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

## Loading and Registering modules

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
module.exports = $module_name
```
I have to inform that Medusa module system does not support anonymus functions, which means if anonymus functions are used such as `(function(){})()` or `let a = function(){}`, an error will be thrown by Medusa.

Well in the entrance file `medusa.js` we import everything we want and at last it will be like this：
```javascript
// entrance of medusa

import 'medusa.core' 
// this ought to be necessary and put at head of all 'import's

import 'user_agent_check'
import 'bom_check'
// now loading modules

Medusa.extend('user_agent_check')
Medusa.extend('bom_check')
// now registering modules

Medusa.extend('user_agent_log')
// you can also add modules like this but it will not be compiled into the target file
```
Then you only have to run the `medusa-compile.js` on NodeJS like this, you'll get the bundle of compiled Medusa.js
```shell
# It is very much like the famous browserify tool
node medusa-compile.js > medusa_bundle.js

# or you can bind this command in ~/.bashrc
alias medusa-compile="node /path/to/medusa-compile.js"
# then
medusa-compile > medusa_bundle.js
```
The `medusa_bundle.js` can be any file you want.

<br>

## Module details

To learn more about those modules Medusa.js already had, move along to `modules/` to see those docs.