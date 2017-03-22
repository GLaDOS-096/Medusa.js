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

module.exports = bom_check