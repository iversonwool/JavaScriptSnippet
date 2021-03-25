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