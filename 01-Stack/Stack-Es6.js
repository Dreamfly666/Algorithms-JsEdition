/*
 * @Author: lishanpeng 
 * @Date: 2019-01-19 13:24:51 
 * @Last Modified by: lishanepng
 * @Last Modified time: 2019-03-11 22:14:18
 */
//   栈是一种后进先出的LIFO 原则的有序集合
// inzui
let Stack = (function () {
    const items = new WeakMap()
    class Stack {
        constructor() {
            items.set(this, [])
        }
        push(element) {
            let s = items.get(this)
            s.push(element)
        }
        pop() {
            let s = items.get(this)
            let r = s.pop()
            return r
        }
        getSize(){
            let s = items.get(this)
            return s.length
        }
        peek(){
            let s = items.get(this)
            return s[this.getSize() - 1]
        }
        isEmpty(){
            return this.getSize() === 0
        }
    }
    return Stack
})()

x



