// function sleep(time) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time)
//   })
// }
//
//
// async function result() {
//   console.time('time')
//   const r = await sleep(3000)
//   console.log('result', r)
//   console.timeEnd('time')
// }
//
//
// result()

///////立马回调
/*
function cal(a, b, callback) {
  const result = a + b
  if (callback) callback(result)
}

console.log('start')
cal(3, 9, function (res) {
  console.log('res is', res)
})
console.log('end')

 */



function asyncCal(a, b, callback) {
  console.log('cal start')
  setTimeout(() => {
    const result = a + b
    if (callback) callback(result)
  }, 3000)
}

console.log('1')
asyncCal(3, 9, (r) => {
  console.log('r', r)
})
console.log('2')