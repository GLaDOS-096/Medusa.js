// compile the medusa.js to medusa.compiled.js
// that medusa.compiled.js is supposed to be 

var fs = require('fs')
var eol = require('os').EOL
var extend_cmd = []

function compile(file,iter){
    fs.stat(file,function(err,stats){
        if (err) throw err
        fs.open(file,'r',function(err,fd){
            if (err) throw err
            var readBuffer = new Buffer(stats.size),
                bufferOffset = 0,
                bufferLength = readBuffer.length,
                filePos = 0
            fs.read(fd,readBuffer,bufferOffset,bufferLength,filePos,function read(err,bytes){
                if (err) throw err
                if (bytes>0) {
                    var contentLines = readBuffer.toString().split(eol)
                    contentLines.forEach(function(line,index){
                        iter(line,index)
                    })
                }
            })
        })
    })
}

compile('./medusa.js',function(line,index){
    switch(true){
        case /import/.test(line):
            var module_name = line.split("'")[1]
            compile('./modules/'+module_name+".js",function(line,index){
                switch(true){
                    case /module.exports/.test(line):
                        if (module_name!='medusa.core'){
                            console.log('Medusa.extend('+module_name+')')
                        }
                        break
                    default:
                        console.log(line)
                }
            })
            break
        case /Medusa.extend/.test(line):
            extend_cmd.push(line.split("'")[1])
            break
    }
})