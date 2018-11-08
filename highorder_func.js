const array = [
  {
    sourceName: 'hello',
    targetName: 'world',
  },
  {
    sourceName: 'name',
    targetName: 'lily',
  }
]

const result = array.reduce((previousValue, currentValue) => {
  // console.log(previousValue)
  previousValue[currentValue.sourceName] = currentValue.targetName
  return previousValue
}, {})

console.log(result)
