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

  display() {
    let currentNode = this.head
    let result = ''
    while (currentNode) {
      result += `${currentNode.element}->`
      currentNode = currentNode.next
    }
    result += `null`
    console.log(result)
  }
}

const linkedList = new LinkedList()

linkedList.insert('apple', 'head')
linkedList.display()
linkedList.insert('strawberry', 'apple')
linkedList.display()
linkedList.remove('apple')
linkedList.display()
