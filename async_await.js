function resolveAfter2Seconds(x) {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  }))
}


const add = async function (x) {
  const a = await resolveAfter2Seconds(20)
  const b = await resolveAfter2Seconds(30)
  return x + a + b
}


add(10).then(v => {
  console.log(v)
})

// [resolveAfter2Seconds(90)]


// []
async function func1(a) {

  console.log('async function without return value')
  // return a

}


async function func2() {
  const value = await func1('hello world!')
  console.log('value is ', value)
}
func2()