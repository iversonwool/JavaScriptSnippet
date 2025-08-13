class Node {
  constructor(e) {
    this.element = e
    this.next = null
    this.prev = null
  }

}

class DoublyLinkedList {
  constructor() {
    this.head = new Node('head')

  }

  find(item) {
    let current = this.head
    while (current.element !== item) {
      current = current.next
    }
    return current
  }

  insert(newItem, item) {
    const newNode = new Node(newItem)
    const found = this.find(item)
    //should exec first
    newNode.next = found.next
    newNode.prev = found
    found.next = newNode

  }

  remove(item) {
    const found = this.find(item)
    if (found) {
      if (found.prev) {
        found.prev.next = found.next
      } else {
        // 删除的是head元素
        this.head = found.next
      }
      if (found.next) found.next.prev = found.prev
      found.next = null
      found.prev = null
    }
  }

  last() {
    let current = this.head
    while (current.next !== null) {
      current = current.next
    }
    return current
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

  displayReverse() {
    let currentNode = this.last()
    let result = ''
    while (currentNode) {
      result = `${currentNode.element}${result ? `<-${result}`:''}`
      currentNode = currentNode.prev
    }
    result = `null<-${result}`
    console.log(result)
  }
}

const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.insert('a', 'head')
doublyLinkedList.display()
doublyLinkedList.displayReverse()
doublyLinkedList.insert('b', 'a')
doublyLinkedList.display()
doublyLinkedList.displayReverse()
doublyLinkedList.remove('head')
doublyLinkedList.display()
doublyLinkedList.displayReverse()