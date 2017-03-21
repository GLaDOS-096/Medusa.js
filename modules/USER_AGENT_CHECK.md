# user_agent_check.js

*a module of Medusa.js to analyze the User-Agent string of the browsers*

~~author: GLaDOS-096~~

<br>

## APIs

`Medusa.getUserAgent()`

This function simply returns the user-agent string.

`Medusa.catchKeyword(ua,keyword)`

This function returns anything that is related to the keyword pushing into this function. The param `ua` leads to the user-agent string while the param `keyword` leads to what we're loking for through this function. The supported keyword atr listed as follows.

```javascript
[
    // browser names
    "Firefox",
    "Chrome",
    "Safari",
    "OPR",
    "MSIE",
    "Maxthon",
    "The World",
    // kernel names
    "AppleWebKit",
    "Gecko",
    "Trident",
    //special keywords
    "Version"
]
```

`Medusa.getBrowserByUa()`

Sound like `document.getElementById()` right? It is also used like this and it returns the result like this:

```javascript
{
    "browser": "Firefox: 52.0",
    "kernel": "Gecko: 20100101"
}
```

<br>

## A bit more hints

Results directly judged by this module can be incorrect 'cause some browsers tend to immitate others in this way in order to hide themselves. Remember that this module is only an assistance rather than a shortcut.