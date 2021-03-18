function Parent1() {
  this.name = 'Parent1'
  this.play = [1, 2, 3, 4]
}

function Child1() {
  this.type = 'Child1'
}


Child1.prototype = new Parent1()


const c1 = new Child1()
const c2 = new Child1()

c1.play.push(5)

console.log(c1.play)
console.log(c2.play)