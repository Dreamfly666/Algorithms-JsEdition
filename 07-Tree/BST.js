//  非顺序数据机构 --- 树
// 位于树顶部的为根结点；至少有一个子节点的节点称为内部节点，没有子元素的节点称为外部节点或者叶节点
// 子树由节点和它的后代构成，节点深度取决于它祖先节点的数量。
// 树的高度取决于所有节点深度的最大值；层级：根节点是0层
// 树的节点成为键 
// 遍历
// 先序遍历：根左右  中序遍历：左根右  后序遍历：左右根
function BinarySearchTree() {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }

    var insertNode = function(node,newNode) {
        if(newNode.key < node.key) {

        }
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
    // 插入
    this.insert = function (key) {
        var newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    // 遍历

    this.inOrderTraverse = function (callback) {
    
    }


}

var tree = new BinarySearchTree()
tree.insert(11)