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


// const func = add.bind(obj, 3)

obj.z = add.bind(null)


console.log(obj.z(9, 9))
