// used as a unit test container
// always the latest patterns inside

var Medusa = {
    extend: function extend(props){
        props.forEach(function(item,index){
            if (item.name===""){
                console.error("extension invalid: function name missing.")
            } else if (item.name==undefined){
                Medusa[item.toLocaleString().split('(')[0].split(' ')[1]] = item
            } else {
                Medusa[item.name] = item
            }
        })
    }
}

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
            case "Gecko":
                return __match__(RegExp(keyword+"\/[0-9]*"))
                break
            case "Mozilla":
            case "Firefox":
            case "AppleWebKit":
            case "Safari":
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
        var dict = ["Firefox","Chrome","Safari","OPR","AppleWebKit","Gecko","Version"]
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
                case "1000010":
                    return {
                        "browser": result[0],
                        "kernel": result[5]
                    }
                    break
                case "0110100":
                    return {
                        "browser": result[1],
                        "kernel": result[4]
                    }
                    break
                case "0010101":
                    return {
                        "browser": "Safari: " + result[6].split(': ')[1],
                        "kernel": result[4]
                    }
                    break
                case "0111100":
                    return {
                        "browser": "Opera: " + result[3].split(': ')[1],
                        "kernel": result[4]
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