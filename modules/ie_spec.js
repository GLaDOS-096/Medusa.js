// this module is to check what only IE supports

module.exports = ie_spec.js

var ie_spec = [
    function ieSpecListGen(){
        return [
            "ActiveXObject",
            "function.name",
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
            }
        });
    }
]