// var LinkedList = function(){
//     let Node = function(element){
//         this.element = element
//         this.next = null
//     }
//     let length = 0
//     let head = null
//     this.append = function(element){
//         let node = new Node(element),current
//         if(head === null) {
//             head = node
//         } else {
//             current = head
//             // when loop termination,current is the tail
//             while(current.next){
//                 current = current.next
//             }
//             current.next = node
//         }
//         length++
//     }
//     this.insert = function(position,element){
//         if(position >= 0 &&  position <= length-1){
//             let node = new Node(element),
//             current = head,previous,index = 0
//             if(position === 0){
//                 node.next = current
//                 head = node
//             } else {
//                 while(index++ < position){
//                     previous = current
//                     current = current.next
//                 }
//                 node.next = current
//                 previous.next = node
//             }
//             length++
//             return true
//         } else {
//             return false
//         }
//     }
//     this.remove = function(element){
//         let index = this.indexOf(element)
//         return this.removeAt(index)
//     }
//     this.removeAt = function(position){
//         if(position > -1  && position < length){
//             let current = head,index = 0,previous
//             if(position === 0){
//                 head = current.next
//             } else{
//                 while(index++ < position){
//                     previous = current
//                     current = current.next
//                 }
//                 previous.next = current.next
//             }
//             length--
//             return current.element
//         } else {
//             return null
//         }
//     }
//     this.indexOf = function(element){
//         let current = head,
//         index = 0
//         // when loop termination,current is null
//         while(current){
//             if(element === current.element){
//                 return index
//             }
//             index++
//             current = current.next
//         }
//         return -1
//     }
//     this.isEmpty = function(){
//         return length === 0
//     }
//     this.size = function(){
//         return length
//     }
//     this.getHead = function(){
//         return head
//     }
//     this.toString = function(){
//         let current = head,string = ''
//         while(current){
//             string += current.element + (current.next ? '->' : '')
//             current = current.next
//         }
//         return string
//     }
    
// }


