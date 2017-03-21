var bom_check = [
    function bomFeatureListGen(){
        return [
            "navigator.buildID",
            "navigator.cpuClass",
            "navigator.oscpu", 
            "navigator.userProfile",
            "navigator.onLine",
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
    function bom_check(){
        var bomFeatureList = Medusa.bomFeatureListGen()
        result = []
        bomFeatureList.forEach(function(item,index){
            switch(item){
                case "navigator.oscpu":
                    if (navigator.oscpu!=undefined){
                        result.push("Firefox")
                    }
                    break
                case "navigator.buildID":
                    if (navigator.buildID!=undefined){
                        result.push("Firefox")
                    }
                    break
                case "screen.left":
                    if (screen.left!=undefined){
                        result.push("Firefox")
                    }
                    break
                case "screen.top":
                    if (screen.top!=undefined){
                        result.push("Firefox")
                    }
                    break
                case "navigator.userProfile":
                    if (navigator.userProfile!=undefined){
                        result.push("IE")
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
                    }
                    break
                case "screen.deviceYDPI":
                    if (screen.deviceYDPI!=undefined){
                        result.push("IE")
                    }
                    break
                case "navigator.onLine":
                    if (!navigator.onLine){
                        result.push("Safari,Chrome")
                    }
                    break
                case "navigator.appMinorVerison":
                    if (navigator.appMinorVersion!=undefined){
                        result.push("IE,Opera")
                    }
                    break
                case "navigator.userLanguage":
                    if (navigator.userLanguage!=undefined){
                        result.push("IE,Opera")
                    }
                    break
                case "screen.availLeft":
                    if (screen.availLeft!=undefined){
                        result.push("Firefox,Chrome,Safari")
                    }
                    break
                case "screen.availTop":
                    if (screen.availTop!=undefined){
                        result.push("Firefox,Chrome,Safari")
                    }
                    break
            }
        })
        return result
    }
]

module.exports = bom_check