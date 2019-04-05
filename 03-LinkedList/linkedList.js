// 链表的数据结构
// 大多数语言中 数组的大小是固定的，在中间插入或者移除项的成本很高，Array类实现了这些但是背后的情况也是如此；

// 链表存储有序的数据集合，链表中的数据在内存中不是连续的，每个元素由一个存储元素本身的节点
// 和一个指向下一个元素的引用组成。 链表结点

// 好处：添加删除元素不需要移动其他元素
// 劣势：数组可以直接访问任何位置的任何元素,但是链表要访问中间元素，需要从表头开始迭代列表知道找到所需元素；

function LinkedList() {
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
                // 重点
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
            var current = head,
                index = 0,
                previous
            if (position === 0) {
                head = current.next
            } else {
                // 迭代找到position位置的元素引用current变量,并且保存前一个元素的引用previous变量
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
            // console.log(current.element)
            string += current.element + (current.next ? '->' : '')
            current = current.next
        }
        return string
    }
    this.print = function () {

    }

}
let l1 = new LinkedList()
l1.append('nihao')
l1.append('lishanpeng')
l1.append('lifeifei')
l1.remove('lishanpeng')

console.log(l1.getHead())
