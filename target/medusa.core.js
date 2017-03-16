// compiled 'min' version of Medusa.js
// only contains the most basic rules of User-Agent check 

var Medusa = {
    extend: function extend(props){
        props.forEach(function(item,index){
            if (item.name===""){
                console.error("extension invalid: function name missing.")
            } else {
                Medusa[item.name] = item;
            }
        })
    }
}