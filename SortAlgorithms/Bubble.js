
// 冒泡排序法
function bubble(arr){
    var len = arr.length
    for(var i=0;i<len-1;i++){
        for(var j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubble([34,43,1,0,100,234,43]))