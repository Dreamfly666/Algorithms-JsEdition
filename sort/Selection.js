// 选择排序是时间复杂度表现最稳定的排序算法O(n*n)

// function selectionSort(arr){
//     var len = arr.length
//     var minIndex,temp
//         for(var i=0;i<len-1;i++){
//             minIndex = i
//             for(var j=1+i;j<len;j++){
//                 if(arr[j] < arr[minIndex]){
//                     minIndex = j
//                 }
//             }
//         temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//         }
//         return arr
// }
console.log(selectionSort([2,43,5]))

