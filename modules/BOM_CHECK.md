# bom_check.js

*a module of Medusa.js to test features of BOM in different browsers*

~~author: GLaDOS-096~~

<br>

## APIs

`Medusa.bomFeatureListGen()`

This function returns a list of supported features that are to be checked

`Medusa.bomFeatureTest(mode)`

This function is to test all the features tested above. The param 'mode' has actually two options: 'condition' and 'result'. The return value of these two are shown as below:
```javascript
> Medusa.bomFeatureTest('condition')
["not supported", "not supported", "not supported", "not supported", "supported", "supported"]

> Medusa.bomFeatureTest('result')
["Safari", "Chrome", "Safari", "Chrome"]
```

`Medusa.bom_check()`

This is a packed function for testing and uniquing the result of `Medusa.bomFeatureTest('result')`.