/** 
 
非顺序数据机构 --- 树

树结构包含一系列父子关系的节点，每个节点都有一个父节点
以及0个或者多个子节点

树顶部的节点叫做根节点

节点分为内部节点和外部节点，至少有一个子元素的节点称为内部节点，没有子元素的
节点称为外部节点或者叶节点；
一个节点可以有祖先和后代，祖先包括父节点、祖父节点、曾祖父节点

子树是由节点和它的后代构成；
 节点的一个属性是深度，节点的深度取决于它的祖先节点的数量；
 树的高度取决于节点深度的最大值，根节点在第0层；

二叉树的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点--有助于
我们写成更高效的向、从树中插入、查找和删除节点的算法；
二叉搜索树bst是二叉树的一种，左侧节点存储比父节点小的值，右侧节点存储比父节点
大或者等于父节点的值。
树的节点也叫做键。
*/
function BinarySearchTree() {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }
    var root = null
    this.insert = function (key) {
        var newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    this.inOrderTraverseNode = function(callback) {
        inOrderTraverseNode(root,callback)
    }
    this.preOrderTraverseNode = function(callback) {
        preOrderTraverseNode(root,callback)
    }
    this.postOrderTraverseNode = function(callback) {
        postOrderTraverseNode(root,callback)
    }
    
    // 中序
    var inOrderTraverseNode = function(node,callback) {
        if(node !== null) {
            inOrderTraverseNode(node.left,callback)
            callback(node.key)
             inOrderTraverseNode(node.right,callback)
        }
    }
    // 先序
    var preOrderTraverseNode = function(node,callback) {
        if(node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left,callback)
            preOrderTraverseNode(node.right,callback)
        }
    }
    // 后序
    var postOrderTraverseNode = function(node,callback) {
        if(node !== null) {
            postOrderTraverseNode(node.left,callback)
            postOrderTraverseNode(node.right,callback)
            callback(node.key)
        }
    }
}
var tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)


/** 
 * 树的遍历
 * 
 * 中序遍历
 * 中序遍历是以上行顺序访问bst所有节点的遍历方法，从最小到最大的顺序访问
 * 所有的节点。应用-树的bst树的排序；
 * 
 * 先序遍历
 * 先序遍历是以优先于后代节点的顺序访问每个节点的，应用-打印一个结构化文档。
 * 
 * 后序遍历
 * 后序遍历是先访问节点的后代节点，再访问节点本身。应用--计算一个目录和它
 * 的子目录中所有文件所占空间大小
 * 
 */
function printNode(value) {
    console.log(value)
}
// tree.inOrderTraverseNode(printNode)
// tree.preOrderTraverseNode(printNode)
tree.postOrderTraverseNode(printNode)