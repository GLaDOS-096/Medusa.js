module.exports = Medusa

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
    }
}
