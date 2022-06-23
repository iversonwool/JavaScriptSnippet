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


const p = () => new Promise((r, j) => {
  let a = 1;
  let b = 3;
  if (a - b) {
    j(false)
  } else {
    r(true)
  }
})


function testError() {
  //
  // try {
  //   const r = await p()
  // } catch (e) {
  //   console.log('-e-', e)
  // }


  p()
    .then((r) => {
      console.log('r', r)
    })
    .catch((e) => {
      console.log('e', e)
    })
}


testError()


// https://es6.ruanyifeng.com/#docs/async#%E8%AF%AD%E6%B3%95