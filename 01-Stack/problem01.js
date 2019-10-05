
/**
 * 解决leetcode 20 括号匹配问题
 */
var isValid = function (s) {
    let map = {
        '(':-1,
        ')':1,
        '[':-2,
        ']':2,
        '{':-3,
        '}':3
    }
    let stack = []
    for(let i=0;i<s.length;i++){
        if(map[s[i]] < 0){
            stack.push(s[i])
        }else{
            let last = stack.pop()
            if(map[last] + map[s[i]] !==0) return false
        }
    }
    if(stack.length > 0) return false
    return true
}

// 进制转换问题
var divideBy2= (decNumber) =>{
    var remStack = [],
    rem,binaryString = ''
    while(decNumber > 0){
        rem = Math.floor(decNumber%2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber/2)
    }
    while(remStack.length > 0){
        binaryString += remStack.pop().toString()
    }
    return binaryString
}
/**
 * @description 任意进制转换
 * @param {number} decNumber 
 * @param {number} base 
 * @returns {string} 
 */
var baseConverter = (decNumber,base) => {
    let remStack = [],
    rem,binaryString = '',
    digits = '0123456789ABCDEF'
    while(decNumber > 0){
        rem = Math.floor(decNumber%base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber/base)
    }
    while(remStack.length > 0){
        binaryString += digits[remStack.pop()]
    }
    return binaryString
}

// 进阶有个Stack问题
