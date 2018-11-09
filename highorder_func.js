const array = [
  {
    sourceName: 'hello',
    targetName: 'world',
  },
  {
    sourceName: 'name',
    targetName: 'lily',
  }
]

const result = array.reduce((previousValue, currentValue) => {
  // console.log(previousValue)
  previousValue[currentValue.sourceName] = currentValue.targetName
  return previousValue
}, {})

console.log(result)


////////////////////////////////////////////////////////

// Array

///slice
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的 **浅拷贝**。
// 原始数组不会被改变。

// arr.slice();
// // [0, end]
//
// arr.slice(begin);
// // [begin, end]
//
// arr.slice(begin, end);
// // [begin, end)

// param
// begin 可选
// 从该索引处开始提取原数组中的元素（从0开始）。
// 如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2)表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
// 如果省略 begin，则 slice 从索引 0 开始。

// end可选
// 在该索引处结束提取原数组元素（从0开始）。slice会提取原数组中索引从 begin 到 end 的所有元素（包含begin，但不包含end）。
// slice(1,4) 提取原数组中的第二个元素开始直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。
// 如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。
// slice(-2,-1)表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
// 如果 end 被省略，则slice 会一直提取到原数组末尾。
// 如果 end 大于数组长度，slice 也会一直提取到原数组末尾。


// description
// slice 不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。
// 原数组的元素会按照下述规则拷贝：
//
// 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。
// 两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
// 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。
// 在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
// 如果向两个数组任一中添加了新元素，则另一个不会受到影响。

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const slice1 = animals.slice(-2);
console.log(slice1) // [ 'duck', 'elephant' ]
//the last === -1

const slice2 = animals.slice(-2, -1)
console.log(slice2) // [ 'duck' ]

///////////


///curry

const curry = function (fn) {
  const args = Array.prototype.slice.call(arguments, 1)
  return function () {
    const newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}

function add(a, b) {
  return a + b
}

const addCurry = curry(add, 1)
console.log(addCurry(2))


// 第二版
function sub_curry(fn) {
  const args = [].slice.call(arguments, 1);
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function curry2(fn, length) {
  length = length || fn.length
  const slice = Array.prototype.slice
  return function () {
    if (arguments.length < length) {
      const combined = [fn].concat(slice.call(arguments))
      return curry2(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}

const testFunc = curry2(function (a, b, c) {
  return [a, b, c]
})

console.log(testFunc('a')('b')('c'))
console.log(testFunc('a', 'b')('c'))

// sub_curry 的作用就是用函数包裹原函数，然后给原函数传入之前的参数，当执行 fn0(...)(...) 的时候，执行包裹函数，返回原函数，
// 然后再调用 sub_curry 再包裹原函数，然后将新的参数混合旧的参数再传入原函数，直到函数参数的数目达到要求为止。
