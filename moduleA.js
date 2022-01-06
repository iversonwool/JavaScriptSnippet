// const fn= require('./moduleB')
const {hello} = require('./moduleB')
// fn()
console.log(hello)


class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    this.data.push(item)
  }

  pop() {
    return this.data.pop()
  }

  empty() {
    return this.data.length === 0
  }
}


const stack = new Stack()

stack.push(1)
stack.pop()

console.log(stack.empty())