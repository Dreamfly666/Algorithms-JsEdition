// 字典和散列表来存储唯一的值 不重复的值的数据结构
// 集合 字典 散列表 可以存储不重复的值 
// 集合中[value,value] 对应 es6中的Set
// 字典(映射)和散列表,对应es6中Map [key,value] 进行存储，key是用来查询特定元素 

function Dictionary() {
    var items = {}
    this.has = function (key) {
        return key in items
    }
    this.set = function (key, value) {
        items[key] = value
    }
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined
    }
    this.values = function () {
        var values = []
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }
        return values
    }
    this.size = function () {
        return Object.keys(items).length
    }
    this.clear = function () {
        items = {}
    }
    this.keys = function () {
        return Object.keys(items)
    }
    this.getItems = function () {
        return items
    }
}

// test
let d1 = new Dictionary()
d1.set('name', 'lishanpeng')
d1.set('age', '22')
console.log(d1.getItems())
console.log(d1.has('name'))
console.log(d1.size())
console.log(d1.values())
console.log(d1.keys())
d1.delete('name')
console.log(d1.getItems())