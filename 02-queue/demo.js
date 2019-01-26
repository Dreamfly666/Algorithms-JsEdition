// 优先队列
function PriorityQueue(){
    let items = []
    // 创建一个对象
    function QueueElement(element,priority){
        this.element = element
        this.priority = priority
    }
    this.enqueue = function(element,priority){
        let queueElement = new QueueElement(element,priority)
        let added = false
        for(let i=0;i<items.length;i++){
            if(queueElement.priority < items[i].priority){
                items.splice(i,0,queueElement)
                added = true
                break
            }
        }
        // 没有找到priority更大的 即没有找到优先级更低的 那么被添加元素只能置于队列末尾
        if(!added) items.push(queueElement)
    }
    this.print = function () { 
        for(let i=0;i<items.length;i++){
            console.log(`${items[i].element} - ${items[i].priority}`)
        }
     }
}

// let priorityQueue = new PriorityQueue()
// priorityQueue.enqueue('lishaeng',22)
// priorityQueue.enqueue('yangyuxuan',1)
// priorityQueue.enqueue('liyuyang',43434)
// priorityQueue.print()

// 循环队列---击鼓传花问题
// 实现一个队列
 function Queue(){
    let items = []
    this.enqueue  = function (element) { 
        items.push(element)
     }
    this.dequeue = function () {
        return items.shift()
    }
    this.front = function () {
        return items[0]
    }
    this.isEmpty = function (){
    return items.length == 0
    }
    this.size = function(){
        return items.length
    }
    this.print = function(){
        console.log(items.toString())
    }
 }

function hotPotato(nameList,num){
    let queue = new Queue()
    for(let i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i])
    }
    let eliminated = ''
    while(queue.size() > 1){
        for(let i=0;i<num;i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + '被淘汰了')
    }
    return queue.dequeue()
}
let names = ['john','jack','camla','ingrid','carl']
let winner = hotPotato(names,7)
