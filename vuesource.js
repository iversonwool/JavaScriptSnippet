function simpleNormalizeChildren (children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}


console.log(simpleNormalizeChildren(['1', ['2', '3']]))


console.log([].concat('1', ['2', '3']))