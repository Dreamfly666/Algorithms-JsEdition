// import { Hash } from "crypto";

// HashTable类也叫做HashMap类,是Dictionar类的一种散列表实现方式
// 散列算法的作用是尽可能快的在数据结构种找到一个值。
// 在数据结构中找到一个值，也就是实现get方法，需要遍历整个数据结构来找到。如果使用散列函数那么知道
// 键值就可以快速检索到值在表中的地址
//   以数据中每个元素的关键字K为自变量，通过散列函数H（k）计算出函数值，以该函数值作为一块连续存储空间的的单元地址，
//   将该元素存储到函数值对应的单元中。查找的时间复杂度是O(1)

function hashTable() {
    var table = []
    var loselostHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
    this.put = function (key, value) {
        var position = loselostHashCode(key)
        console.log(position + '-' + key)
        table[position] = value
    }
    this.get = function (key) {
        return table[loselostHashCode(key)]
    }
    this.remove = function (key) {
        table[loselostHashCode(key)] = undefined
    }
    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ':' + table[i])
            }
        }
    }
}
// let h1 = new HashTable()
// h1.put('agE', 32)
// h1.put('name', 'lishaoeng')
// h1.put('Age', 22)
// h1.put('hobby', 'drwaing')
// h1.print()

// 通过结果发现 agE name Age具有相同的散列值，所以后添加的会覆盖前面的；
// 解决方式：分离链接、线性探查、双散列法

// 1.分离链接:包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突最简单的方法
// 但是还需要除HashTable实例外的额外存储空间。

var LinkedList = function () {
    let Node = function (element) {
        this.element = element
        this.next = null
    }
    let length = 0
    let head = null
    this.append = function (element) {
        let node = new Node(element),
            current
        if (head === null) {
            head = node
        } else {
            current = head
            // when loop termination,current is the tail
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous, index = 0
            if (position === 0) {
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.remove = function (element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head,
                index = 0,
                previous
            if (position === 0) {
                head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }
    this.indexOf = function (element) {
        let current = head,
            index = 0
        // when loop termination,current is null
        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }
    this.isEmpty = function () {
        return length === 0
    }
    this.size = function () {
        return length
    }
    this.getHead = function () {
        return head
    }
    this.toString = function () {
        let current = head,
            string = ''
        while (current) {
            string += current.element + (current.next ? '->' : '')
            current = current.next
        }
        return string
    }

}
var ValuePair = function (key, value) {
    this.key = key
    this.value = value
    this.toString = function () {
        return '[' + this.key + '-' + this.value + ']'
    }
}

function HashTable1() {
    var table = []
    var loselosetHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
    this.put = function (key, value) {
        var position = loselosetHashCode(key)
        if (table[position] === undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }
    this.get = function (key) {
        var position = loselosetHashCode(key)
        if (table[position] !== undefined) {
            console.log(table[position].toString())
            var current = table[position].getHead()
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
            if (current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }
    this.remove = function (key) {
        var position = loselosetHashCode(key)
        if (table[position] !== undefined) {
            var current = table[position].getHead()
            while (current.next) {
                if (current.element.key === key) {
                    talbe[position].remove(current.element)
                    if (talbe[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            if (current.element.key === key) {
                table[position].remove(current.element)
                if (table[position].isEmpty()) {
                    talbe[position] = undefined
                }
                return true
            }
        }
        return false
    }
}


let n = new HashTable1()
n.put('Age', 22)
n.put('agE', 44)
n.put('name', 434)

// console.log(n.get(''))
console.log(n.get('agE'))
n.remove('name')
console.log(n.get('agE'))

// 2.线性探查解决js中不需要改变数组的大小
var HashTable2 = function (key, value) {
    var table = []
    var loselosetHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
    this.put = function (key,value) {
        var position = loselosetHashCode(key)
        if (table[position] === undefined) {
            table[position] = new ValuePair(key, value)
        } else {
            var index = ++position
            while (table[index] !== undefined) {
                index++
            }
            table[index] = new ValuePair(key, value)
        }
    }
 this.get = function(key){
     var position = loselosetHashCode(key)
     if(table[position] !== undefined){
         if(table[position].key === key){
             return table[position].value
         } else {
             var index = ++position
            while(table[index] === undefined || table[index].key !== key){
                index++
            }
            if(table[index].key === key) {
                return table[index].value
            }
         }
     }
     return undefined
 }
 this.remove = function(key){
     var position = loselosetHashCode(key)
     if(table[position] !== undefined){
         if(table[position].key === key){
                table[position] = undefined
         } else {
             var index = ++position
            while(table[index] === undefined || table[index].key !== key){
                index++
            }
            if(table[index].key === key){
                table[index] = undefined
            }
         }
     }
 }
 this.toString = function(){
     
 }

}
let h = new HashTable2()
h.put('Age',22)
h.put('agE',33)

console.log('-----')
console.log(h.get('Age'))
console.log(h.get('agE'))
h.remove('agE')
console.log(h.get('agE'))