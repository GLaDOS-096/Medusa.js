var ie_spec = [
    function ieSpecListGen(){
        return [
            "ActiveXObject",  // IE only is able to construct ActiveX Objects
            "function.name",  // IE does not support 'name' property of [object Function]
            "document.security"
        ]
    },
    function ie_spec(){
        var specList = Medusa.ieSpecListGen();
        var specResult = [0,0];
        specList.forEach(function(item,index){
            switch(item){
                case "ActiveXObject":
                    let a = new ActiveXObject("Microsoft.XMLHttp")
                    if (a!=undefined){
                        specResult[index] = 1
                    } else {
                        specResult[index] = 0
                    }
                    break
                case "function.name":
                    function __dGVzdA__(){}
                    if (__dGVzdA__.name!=undefined){
                        specResult[index] = 1
                    } else {
                        specResult[index] = 0
                    }
                    break
                case "document.security":
                    if (document.security!=undefined){
                        specResult[index] = 1
                    } else {
                        specResult[index] = 0
                    }
            }
        })
        var __re__ = (function(specList,specResult){
            function __transfer__(code){
                if (code==1){
                    return "supported"
                } else {
                    return "not supported"
                }
            }
            var result = [{},{},{}]
            specResult.forEach(function(item,index){
                result[index] = {
                    "propName": specList[index],
                    "propState": __transfer__(specResult[index])
                }
            })
            return result
        })(specList,specResult)
        return __re__
    }
]

module.exports = ie_spec.js
