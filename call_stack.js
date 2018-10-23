console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end')

//order
// script start
// script end
// promise1
// promise2
// setTimeout

// tasks and microtasks

//asynchronous

function asyncForEach(array, cb) {
  // setTimeout()
  array.forEach(function (i) {
    // delay()
    setTimeout(() => cb(i), 0)
  })
}

asyncForEach([1, 2, 3, 4, 5], (i) => {
  console.log(i)
});

[1, 2, 3].forEach((i) => {
  console.log(i)
})
