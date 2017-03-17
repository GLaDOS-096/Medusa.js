var user_agent_check = [
    function getUserAgent(){
        return navigator.userAgent;
    },
    function catchKeyword(ua,keyword){
        switch(keyword){
            case "Mozilla":
            case "Firefox":
            case "AppleWebKit":
            case "Safari":
            case "Version":
                var re = ua.match(RegExp(keyword+"\/[0-9]*\.[0-9]*"))
                if (re==null){
                    return -1
                } else {
                    return re[0].replace("/",": ")
                }
                break
            case "Chrome":
            case "OPR":
                var re = ua.match(RegExp(keyword+"\/[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*"))
                if (re==null){
                    return -1
                } else {
                    return re[0].replace("/",": ")
                }
                break
            case "Gecko":
                var re = ua.match(RegExp(keyword+"\/[0-9]*"))
                if (re==null){
                    return -1
                } else {
                    return re[0].replace("/",": ")
                }
                break
            default:
                console.error("keyword invalid: not in the dict.")
                return -1
        }
    },
    function getUABrowser(){
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
            console.log(result_map)
            switch(result_map){
                case [1,0,0,0,0,1,0]:
                   return result[0]
                   break
                case [0,1,1,0,1,0,0]:
                    return result[1]
                    break
                case [0,0,1,0,1,0,1]:
                    return result[2]
                    break
                case [0,1,1,1,1,0,0]:
                    return result[3]
                    break
                default:
                    return "Unknown Browser"
            }
        })(result,result_map)
        return __re__
    }
]