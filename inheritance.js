/**
 * 原型链继承
 * 弊端：原型对象被共享
 * @constructor
 */
function Parent1() {
  this.name = 'Parent1'
  this.play = [1, 2, 3, 4]
  this.sayHello = function () {
    console.log('hello!')
  }
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

/**
 * 使用call的构造函数继承
 * 弊端：父类原型对象上的方法无法获取
 * @constructor
 */
function Child1Call() {
  Parent1.call(this)
  this.type = 'child1call'
}

Parent1.prototype.getName = function () {
  return this.name
}

const c3 = new Child1Call()
console.log(c3.play)
// console.log(c3.getName()) // getName not defined
c3.sayHello()
console.log('--------------------------------------')
/**
 * 组合继承（原型链 + call构造函数）
 * @constructor
 */
function Parent2() {
  this.name = 'parent'
  this.fruits = ['apple', 'orange']
}

Parent2.prototype.getName = function () {
  return this.name
}

function Children() {
  Parent2.call(this)
  this.age = 10
}

Children.prototype = new Parent2()
// 手动挂上构造器，指向自己的构造函数
/**
 * 如果这里不指定constructor 那么默认为 new 后面的构造函数
 * @type {Children}
 */
Children.prototype.constructor = Children;

const child1 = new Children()
child1.fruits.push('pear')
const child2 = new Children()

console.log(child1.fruits)
console.log(child2.fruits)
console.log(child2.getName())
console.log(child1.constructor) // === Parent2
console.log(Children.prototype.constructor) // Parent2


console.log('333333333333333333333333333333333333333333333')
/**
 * 原型继承
 * 弊端：也会有原型对象的共享问题
 */
const parent4 = {
  name: 'parent4',
  hobbies: ['basketball', 'swim'],
  getName() {
    return this.name
  }
}

const children4 = Object.create(parent4)
const children5 = Object.create(parent4)

console.log(children4.name)
console.log(children5.getName())
children5.hobbies.push('football')
console.log(children5.hobbies)
console.log(children4.hobbies)

console.log(children4.prototype) // 普通对象没有prototype
console.log('444444444444444444444444444444444444444444444444444')
/**
 * 寄生式继承
 * 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
 * 弊端：原型对象共享，跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
 */
function createChildren(p) {
  const children = Object.create(p)
  children.sayHi = function () {
    console.log('Hi')
  }
  return children
}

const children7 = createChildren(parent4)
const children6 = createChildren(parent4)
children7.hobbies.push('walking')
console.log(children7.hobbies)
console.log(children6.hobbies)


console.log('555555555555555555555555555555555555555555')


/**
 * 寄生组合式继承
 * 最优解
 * extends关键字的内部实现
 * 减少了性能开销
 * @param subClass
 * @param superClass
 */

function inheritance(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
}



function SuperClass() {
  this.name = 'super class'
}

function SubClass() {
  SuperClass.call(this)
  this.age = 10
}

inheritance(SubClass, SuperClass)

const sub = new SubClass()
console.log(sub.name)


console.log('666666666666666666666666666666666666666666666666666')
