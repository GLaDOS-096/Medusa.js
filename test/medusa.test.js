var Medusa = {
    extend: function extend(props){
        props.forEach(function(item,index){
            if (item.name===""){
                console.error("extension invalid: function name missing.")
                return 
            } else if (item.name==undefined){
                Medusa[item.toLocaleString().split('(')[0].split(' ')[1]] = item
            } else {
                Medusa[item.name] = item
            }
        })
    },
    render: function render(rndArr){
        rndArr.forEach(function(rndObj,index){
            var elem = document.querySelector(rndObj.el)
            var inner =  rndObj.content
            elem.innerHTML = inner
        })
    }
}

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

Medusa.extend(ie_spec)

var user_agent_check = [
    function getUserAgent(){
        return navigator.userAgent;
    },
    function catchKeyword(ua,keyword){
        function __match__(reg){
            var re = ua.match(reg)
            if (re==null){
                return -1
            } else {
                return re[0].replace("/",": ")
            }
        }
        switch(keyword){
            case "The World":
                return __match__(RegExp(keyword))
                break
            case "Gecko":
                return __match__(RegExp(keyword+"\/[0-9]*"))
                break
            case "Mozilla":
            case "Firefox":
            case "AppleWebKit":
            case "Safari":
            case "MSIE":
            case "Maxthon": 
            case "Trident": 
                return __match__(RegExp(keyword+"\/[0-9]*\.[0-9]*"))
                break
            case "Version":
                return __match__(RegExp(keyword+"\/[0-9]*\.[0-9]*\.[0-9]*"))
                break
            case "Chrome":
            case "OPR":
                return __match__(RegExp(keyword+"\/[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*"))
                break
            default:
                console.error("keyword invalid: not in the dict.")
                return -1
        }
    },
    function getBrowserByUa(){
        var ua = Medusa.getUserAgent();
        var dict = [
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
        var result_map = [0,0,0,0,0,0,0]
        var result = ["","","","","","",""]
        dict.forEach(function(item,index){
            var re = Medusa.catchKeyword(ua,item)
            if (re==-1){
                result_map[index] = 0
            } else {
                result_map[index] = 1
                result[index] = re
            }
        })
        var __re__ = (function(result,result_map){
            switch(result_map.join('')){
                case "10000000100":  // Firefox
                    return {
                        "browser": result[0],
                        "kernel": result[8]
                    }
                    break
                case "01100001000":  // Chrome
                    return {
                        "browser": result[1],
                        "kernel": result[7]
                    }
                    break
                case "00100001001":  // Safari
                    return {
                        "browser": "Safari: " + result[6].split(': ')[1],
                        "kernel": result[7]
                    }
                    break
                case "01110001000":  // Opera
                    return {
                        "browser": "Opera: " + result[3].split(': ')[1],
                        "kernel": result[7]
                    }
                    break
                case "00001000010":  // Internet Explorer 8+
                    return {
                        "browser": "Microsoft Internet Explorer: " + result[4].split(': ')[1],
                        "kernel": result[9]
                    }
                    break
                case "00001000000":  // Internet Explorer 7-
                    return {
                        "browser": "Microsoft Internet Explorer: " + result[4].split(': ')[1],
                        "kernel": "Old IE thing."
                    }
                    break
                case "00001000000":  // The World 3+
                    return {
                        "browser": "The World 3+",
                        "kernel": "Who knows."
                    }
                    break
                default:
                    return "Unknown Browser"
            }
        })(result,result_map)
        return __re__
    },
]

Medusa.extend(user_agent_check)

var bom_check = [
    function bomFeatureListGen(){
        return [
            "navigator.buildID",
            "navigator.cpuClass",
            "navigator.oscpu", 
            "navigator.userProfile",
            "navigator.appMinorVersion",
            "navigator.userLanguage",
            "screen.availLeft",
            "screen.availTop",
            "screen.deviceXDPI",
            "screen.deviceYDPI",
            "screen.left",
            "screen.top"
        ]
    },
    function bomFeatureTest(mode){
        var bomFeatureList = Medusa.bomFeatureListGen()
        result = []
        condition=  []
        bomFeatureList.forEach(function(item,index){
            switch(item){
                case "navigator.oscpu":
                    if (navigator.oscpu!=undefined){
                        result.push("Firefox")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "navigator.buildID":
                    if (navigator.buildID!=undefined){
                        result.push("Firefox")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "screen.left":
                    if (screen.left!=undefined){
                        result.push("Firefox")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "screen.top":
                    if (screen.top!=undefined){
                        result.push("Firefox")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "navigator.userProfile":
                    if (navigator.userProfile!=undefined){
                        result.push("IE")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "navigator.cpuClass":
                    if (navigator.cpuClass!=undefined){
                        result.push("IE")
                    }
                    break
                case "screen.deviceXDPI":
                    if (screen.deviceXDPI!=undefined){
                        result.push("IE")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "screen.deviceYDPI":
                    if (screen.deviceYDPI!=undefined){
                        result.push("IE")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "navigator.appMinorVerison":
                    if (navigator.appMinorVersion!=undefined){
                        result.push("IE")
                        result.push("Oprea")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "navigator.userLanguage":
                    if (navigator.userLanguage!=undefined){
                        result.push("IE")
                        result.push("Oprea")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "screen.availLeft":
                    if (screen.availLeft!=undefined){
                        result.push("Firefox")
                        result.push("Safari")
                        result.push("Chrome")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
                case "screen.availTop":
                    if (screen.availTop!=undefined){
                        result.push("Firefox")
                        result.push("Safari")
                        result.push("Chrome")
                        condition.push("supported")
                    } else {
                        condition.push("not supported")
                    }
                    break
            }
        })
        if (mode=="condition"){
            return condition
        } else if (mode=="result"){
            return result
        } else {
            return
        }
    },
    function bom_check(){
        var posiblities = Medusa.bomFeatureTest('result')
        function unique(arr) {
            var result = [], hash = {};
            for (var i = 0, elem; (elem = arr[i]) != null; i++) {
                if (!hash[elem]) {
                    result.push(elem);
                    hash[elem] = true;
                }
            }
            return result;
        }
        return unique(posiblities).join(',')
    }
]

Medusa.extend(bom_check)
