// FIFO (First In First Out) 先进先出的有序元素集合
let Queue2 = (function(){
    const items = new WeakMap()
    class Queue2 {
        constructor(){
            items.set(this,[])
        }
        enqueue(element){
            let q = items.get(this)
            q.push(element)
        }
        dequeue(){
            let q= items.get(this)
            let r = q.shift()
            return r
        }
        print(){
            let q = items.get(this)
            console.log(q)
        }
    }
    return Queue2
})()

l.enqueue(243432)
