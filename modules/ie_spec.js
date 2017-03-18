// this module is to check what only IE supports

module.exports = ie_spec.js

var ie_spec = [
    function specListGen(){
        return [
            "document.all",
            "ActiveXObject",
            "function.name"
        ]
    },
    function ie_spec(){
        
    }
]