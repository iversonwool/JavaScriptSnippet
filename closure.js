//闭包是函数和声明该函数的词法环境的组合。//

//////词法作用域
function init() {
  let name = 'Mozilla'
  function displayName() {
    //let name = 'inner Mozilla'
    console.log(name)
  }
  displayName()
}
init()


//displayName() 内没有自己的局部变量，然而它可以访问到外部函数的变量，所以 displayName() 可以使用父函数 init() 中声明的变量 name 。
//但是，如果有同名变量 name 在 displayName() 中被定义，则会使用 displayName() 中定义的 name 。


//////闭包
function makeFunc() {
  let name = 'Mozilla'
  function displayName() {
    console.log(name)
  }
  return displayName
}

let myFunc = makeFunc()
myFunc()
// 闭包是由函数以及创建该函数的词法环境组合而成。
// 这个环境包含了这个闭包创建时所能访问的所有局部变量。

function makeAdder(x) {
  return function (y) {
    return x + y
  }
}

let add5 = makeAdder(5)
let add10 = makeAdder(10)

console.log(add5(2))
console.log(add10(2))

// add5 和 add10 都是闭包。
// 它们共享相同的函数定义，但是保存了不同的词法环境。
// 在 add5 的环境中，x 为 5。而在 add10 中，x 则为 10。


//////实用的闭包
/////////////////////////////////////////////////////
// 通常你使用只有一个方法的对象的地方，都可以使用闭包。///////
////////////////////////////////////////////////////


//////用闭包模拟私有方法

const Counter = (function () {
  let privateCounter = 0
  function changeBy(val) {
    privateCounter += val
  }
  return {
    increment() {
      changeBy(1)
    },
    decrement() {
      changeBy(-1)
    },
    value() {
      return privateCounter
    }
  }
})()
console.log(Counter.value()); /* logs 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* logs 2 */
Counter.decrement();
console.log(Counter.value()); /* logs 1 */
// 在之前的示例中，每个闭包都有它自己的词法环境；
// 而这次我们只创建了一个词法环境，为三个函数所共享：Counter.increment，Counter.decrement 和 Counter.value。

// 该共享环境创建于一个立即执行的匿名函数体内。这个环境中包含两个私有项：名为 privateCounter 的变量和名为 changeBy 的函数。
// 这两项都无法在这个匿名函数外部直接访问。
// 必须通过匿名函数返回的三个公共函数访问。
//
// 这三个公共函数是共享同一个环境的闭包。
// 多亏 JavaScript 的词法作用域，它们都可以访问 privateCounter 变量和 changeBy 函数。


// another way
// 你应该注意到我们定义了一个匿名函数，用于创建一个计数器。
// 我们立即执行了这个匿名函数，并将他的值赋给了变量counter。
// 我们可以把这个函数储存在另外一个变量makeCounter中，并用他来创建多个计数器。
const makeCounter = function() {
  let privateCounter = 0
  function changeBy(val) {
    privateCounter += val
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

const Counter1 = makeCounter();
const Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
// 请注意两个计数器 counter1 和 counter2 是如何维护它们各自的独立性的。
// 每个闭包都是引用自己词法作用域内的变量 privateCounter 。
//
// 每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。
// 然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量

// 以这种方式使用闭包，提供了许多与面向对象编程相关的好处 —— 特别是数据隐藏和封装。

//////在循环中创建闭包：一个常见错误

////////////////let 而不是 var


//////性能考量
// 如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。
