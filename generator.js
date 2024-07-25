function* generatorFunc() {
  console.log("Generator");
  yield 'hello'
  console.log("Generator 1");
  yield 'world'
  return '!'
}


const hw = generatorFunc()
// console.log(hw[Symbol.iterator]() === hw)
/**
 * 
 * 
 * 
  任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象
*/
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());


function* gen() {
  let result = yield '2 + 2 = ?'
  console.log(result)

  let a = yield result.replace('?', '4')
  console.log(a)
}

const g = gen()
console.log(g.next())
console.log(g.next('222?'))

/**
 * 伪随机数生成器
 * @param seed
 * @returns {Generator<number, void, *>}
 */
function* pseudoRandom(seed) {
  let previous = seed
  while (true) {
    previous = previous * 16807 % 2147483647
    // previous = next
    yield previous
  }
}

const gtr = pseudoRandom(1)
console.log(gtr.next().value)
console.log(gtr.next().value)
console.log(gtr.next().value)



let range = {
  from: 1,
  to: 5,
  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      yield value
    }
  }
}

async function getValue() {
  for await (let value of range) {
    console.log('value', value)
  }
}

getValue();