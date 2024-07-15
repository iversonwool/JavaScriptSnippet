function* generatorFunc() {
  console.log("Generator");
  yield 'hello'
  console.log("Generator 1");
  yield 'world'
  // return '!'
}


const hw = generatorFunc()
console.log(hw[Symbol.iterator]() === hw) 
/**
 * 
 * 
 * 
  任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象
*/
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());