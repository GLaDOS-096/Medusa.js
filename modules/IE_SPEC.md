# ie_spec.js

*a module of Medusa.js to test features in original JavaScript which only IE has*

~~author: GLaDOS-096~~

<br>

## APIs

`Medusa.ieSpecListGen()`

This function is used for generating a list of characters to be tested. Get the return value and you'll know what this module is to check.

`Medusa.ie_spec()`

This turns out to be the core function of this very module. It returns the result of checking those features. 
```javascript
// For Example if Medusa.ieSpecListGen() returns:
["ActiveXObject","function.name"]

// The return thing of Medusa.ie_spec() will be:
[
    {
        "propName": "ActiveXObject",
        "propState": "supported"
    },{
        "propName": "function.name",
        "propState": "not supported"
    }
]
```

Or you can check them all by yourself if you're not fond of this packed function. It is quite easy anyway.