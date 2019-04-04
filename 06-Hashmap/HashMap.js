// HashTable类也叫做HashMap类,是Dictionar类的一种散列表实现方式
// 散列算法的作用是尽可能快的在数据结构种找到一个值。
// 在数据结构中找到一个值，也就是实现get方法，需要遍历整个数据结构来找到。如果使用散列函数那么知道
// 键值就可以快速检索到值在表中的地址
function HashTable() {
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
}
let h1 = new HashTable()
h1.put('agE', 32)
h1.put('name', 'lishaoeng')
h1.put('Age', 22)
h1.put('hobby', 'drwaing')
console.log(h1.get('name'))
// 
