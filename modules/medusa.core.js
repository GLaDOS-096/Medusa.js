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
module.exports = modusa.core
