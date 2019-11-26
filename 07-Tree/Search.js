// 搜索树中的值

/** 
 * 搜索树种的值
 * 搜索最小值
 * 搜索最大值
 * 搜索特定值
 *
 * 
*/

// 搜索最大值

var BinarySearchTree = function() {
    var root = null
    function Node (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    
    var insertNode = function(node,newNode) {
        if(newNode.key < node.key) {
            if(node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left,newNode)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right,newNode)
            }
        }
    }
    this.insert = function(key) {
        var newNode = new Node(key) 
        if( root === null) {
            root = newNode
        } else {
            insertNode(root,newNode)
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
    this.min = function() {
         return minNode(root)
    }
    var minNode = function(node) {
        if(node) {
            while(node && node.left !== null){
                
            }
        }
    }
    var inOrderTraverseNode = function(node,callback) {
        if(node !== null) {
            inOrderTraverseNode(node.left,callback)
            callback(node.key)
            inOrderTraverseNode(node.right,callback)
        }
    }
    var preOrderTraverseNode = function(node,callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left,callback)
            preOrderTraverseNode(node.right,callback)
        }
    }
    var postOrderTraverseNode = function(node,callback) {
        if(node !== null) {
            postOrderTraverseNode(node.left,callback)
            postOrderTraverseNode(node.right,callback)
            callback(node.key)
        }
    }

}
var printNode = function(key) {
    console.log(key)
}
let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(20)
tree.preOrderTraverseNode(printNode)
