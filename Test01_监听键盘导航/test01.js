var keys = {
    '0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length':3
}

var hash={'q':'qq.com'}

index = 0
while(index<keys['length']){
    divOne = document.createElement('div')
    mainOne.appendChild(divOne)
    row = keys[index]
    index2 = 0
    while(index2<row['length']){
        kbdXXX = document.createElement('kbd')
        kbdXXX.textContent = row[index2]
        divOne.appendChild(kbdXXX)
        index2 = index2+1
    }
    index = index + 1
    
}

//监听键盘
document.onkeyup = function(keyHead){
    key = keyHead['key']
    // website = hash[key]
    // location.href ='http://' + website
    console.log(key)
}


