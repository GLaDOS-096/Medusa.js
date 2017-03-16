module.exports = user_agent_check

var user_agent_check = [
    function getUserAgent(){
        return navigator.userAgent;
    },
    function parseUserAgent(user_agent){
        var _uas1 = user_agent.split('(');
        var h1 = _uas1[0];
        var _uas2 = _uas1[1].split(')');
        var browser_str = _uas2[1].replace(/(^\s*)|(\s*$)/g, "").split(' ');
        var os_str = _uas2[0].split(' ');
        return {
            head: h1,
            browser_str: browser_str,
            os_str: os_str
        }
    },
    function parseSection(section){
        return {
            "section_name": section.split('/')[0],
            "section_val": section.split('/')[1]
        }
    }
]