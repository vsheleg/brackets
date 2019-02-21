module.exports = function check(str, bracketsConfig)  {
    let list=[]
    let config ={}
    
    for (var i=0;i<bracketsConfig.length;i++) {
        config[bracketsConfig[i][1]] = bracketsConfig[i][0]
    }
    
    for (var k=0;k<str.length;k++) {
        if (list.length ===0) {
            list.push(str[k])
        }
        else if (list[list.length-1]===config[str[k]] ) {
            let elem = list.pop()       
        }
        else {
            list.push(str[k])
        }
    }
    if (list.length==0) {
        return true
    }
    else {
        return false
    }
    
};
