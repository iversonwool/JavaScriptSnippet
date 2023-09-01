// 扁平化6版
const testArray = [1, [2, [3, 4]]];

/**
 * 第一版
 */
function flatten1(array) {
  let temp = []
  for (const item of array) {
    if (Array.isArray(item)) {
      temp = temp.concat(flatten1(item))
    } else {
      temp = temp.concat(item)
    }
  }
  return temp
}

console.log(flatten1(testArray))
console.log('111111111111111111111111111111111111111111111111111111111')

/**
 * 第二版
 * @param array {Array}
 * @returns {Array}
 */
function flatten2(array) {
  return array.reduce(
    (accumulator, current) => accumulator.concat(
      Array.isArray(current) ? flatten2(current) : current
    ),
    []
  )
}

console.log(flatten2(testArray))
console.log('222222222222222222222222222222222222222222222222222222222')

// concat 方法 传一个一维数组会 flatten
function flatten3(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flatten3(testArray));
console.log('3333333333333333333333333333333333333333333333')


function flatten4(array) {
  return array.toString().split(',').map(e => parseInt(e))
}

console.log(flatten4(testArray));
console.log('444444444444444444444444444444444444444444')


function flatten5(array) {
  return array.flat(Number.POSITIVE_INFINITY)
}

console.log(flatten5(testArray));
console.log('5555555555555555555555555555555555555555555')


function flatten6 (array){
  const handleStr = JSON.stringify(array).replace(/\[|\]/g, '')
  return JSON.parse(`[${handleStr}]`)
}

console.log(flatten6(testArray));
console.log('666666666666666')


let myA = []
for (let i = 1; i <= 50; i++) {
  myA[i-1] = i
  myA[99-i] = i
}
console.log(myA)


const a = [1, 2, 3, 4]
const b = ['a', 'b', 'c', 'd', 'e']
const c = ['p', 'q']
const result = Array.from(a, s1 => Array.from(b, s2=> [s1, s2]))
console.log('result', result)

function ga(a) {

}

const a1 = [1, 4, 9, 10]
const b1 = a1.map(e => [e])
let x = a1[0]
let i = 0
function gap(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
const c1 = 1
while (i < a1.length) {
  if (a1[i+1] -x >= 2) {
    b1[i] = b1[i].concat(gap(a1[i]+1, a1[i+1]))
  }
  i+=1
}
console.log('results', b1)