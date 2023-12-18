class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = new Node('head')
  }

  find(item) {
    let currentNode = this.head
    while (currentNode.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  insert(newElement, item) {
    const newNode = new Node(newElement)
    const findNode = this.find(item)
    newNode.next = findNode.next
    findNode.next = newNode
  }

  findPrevious(item) {
    let currentNode = this.head
    while (currentNode.next && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  remove(item) {
    let previousNode = this.findPrevious(item)
    if (previousNode) {
      previousNode.next = previousNode.next.next
    }
  }
}

const linkedList = new LinkedList()

linkedList.insert('apple', 'head')
console.log(linkedList)
linkedList.insert('strawberry', 'apple')
console.log(linkedList)
linkedList.remove('apple')
console.log(linkedList)
