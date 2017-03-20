module.exports = user_agent_check

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
                        "kernel": result[5]
                    }
                    break
                case "01100001000":  // Chrome
                    return {
                        "browser": result[1],
                        "kernel": result[4]
                    }
                    break
                case "00100001001":  // Safari
                    return {
                        "browser": "Safari: " + result[6].split(': ')[1],
                        "kernel": result[4]
                    }
                    break
                case "01110001000":  // Opera
                    return {
                        "browser": "Opera: " + result[3].split(': ')[1],
                        "kernel": result[4]
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