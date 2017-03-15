// used as a unit test container
// always the latest patterns inside

var Medusa = {

    /*  i'm still thinking about it. 
        i guess i have to remove this finally out of the 'basic' props.
     */
    getUserAgent: function getUserAgent(){
        return navigator.userAgent;
    },
    parseUserAgent: function parseUserAgent(user_agent){
        var _uas1 = user_agent.split('(');
        var h1 = _uas1[0];
        var _uas2 = _uas1[1].split(')');
        var browser_str = _uas2[1].replace(/(^\s*)|(\s*$)/g, "").split(' ');
        var os_str = _uas2[0].split(' ');
        return {
            header: h1,
            browser_str: browser_str,
            os_str: os_str
        }
    },

    /* this Medusa.extend() turns out to be all folly 
     */
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
