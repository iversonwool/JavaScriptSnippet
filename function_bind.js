function add(a, b) {
  // console.log(this.x, this.y)
  return a-b
}



const obj  = {
  z(m, n) {
    console.log(m)
    console.log(n)
    return m - n
  },
  x: 1,
  y: 2
}

const c = {
  a: 1
}


// const func = add.bind(obj, 3)

obj.z = add.bind(null)


console.log(obj.z(9, 9))

const bindMinus = obj.z.bind(c)
const result =bindMinus(4, 0);
console.log('bind test', result)