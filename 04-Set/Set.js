// 集合是一组无序且唯一的项组成，这个数据结构使用了优先集合的数学概念
// 集合是一组不同的对象的集
let Set = function () {
    let items = {}
    this.has = function (value) {
        return items.hasOwnProperty(value)
    }
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value
            return true
        }
        return false
    }
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }
    this.toStr = function () {
        return items
    }
    this.values = function () {
        let values = []
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }
    this.valuesLegacy = function () {
        let values = []
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key])
            }
        }
        return values
    }
    this.clear = function () {
        items = {}
    }
    this.size = function () {
        return Object.keys(items).length
    }
    this.sizeLegacy = function () {
        let count = 0
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                ++count
            }
        }
        return count
    }
}

// let set = new Set()
// set.add(1)
// set.add(2)
// set.remove(2)
// console.log(set.values())

// 集合操作
// 并集 交集 差集（对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合） 
// 子集

// 并集
Set.prototype.union = function(otherSet){
    let unionSet = new Set()
    let values = this.values()
    for(let i=0;i<values.length;i++){
        unionSet.add(values[i])
    }
    values = otherSet.values()
    for(let i=0;i<values.length;i++){
        unionSet.add(values[i])
    }
    return unionSet
}
// let setA = new Set()
// setA.add(2)
// let setB = new Set()
// setB.add(3)
// let unionAB = setA.union(setB)
// console.log(unionAB.values())

// 交集
Set.prototype.intersection = function(otherSet){
    let intersectionSet = new Set()
    let values = this.values()
    for(let i=0;i<values.length;i++){
        if(otherSet.has(values[i])){
            intersectionSet.add(values[i])
        }
    }
    return intersectionSet
}

let setA = new Set()
setA.add(1)
setA.add(2)

let setB = new Set()
setB.add(2)

let intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values())

// 差集
Set.prototype.difference = function(otherSet){
    let differenceSet = new Set()
    let values = this.values()
    for(let i=0;i<values.length;i++){
        if(!otherSet.has(values[i])){
            differenceSet.add(values[i])
        }
    }
    return differenceSet
}

// 子集
this.subSet = function(otherSet){
    // 长度大于 目标集合 那么肯定不可能是子集
    if(this.size() > otherSet.size()){
        return false
    } else {
        let values = this.values()
        // 该集合存在目标集合不包含的元素
        for(let i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                return false
            }
        }
        return true
    }
}