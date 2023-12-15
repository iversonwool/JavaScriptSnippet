// module.exports = () => {
//   console.log('hello world!')
// }

exports.hello = {
  name: 'leehow'
}


const resultCondition = [
  {
  "symbol": "大于等于",
  "childCondition": [
    {
      'isAnd':0,//或  1且
      "symbol": "小于等于",
      "value": 5,
      "option": "电流"
    },
    {
      "symbol": "大于等于",
      "value": 0,
      "option": "电流"
    }
  ],
  "value": 12,
  "option": "电压"
  },
  {"symbol": "小于等于",
    "childCondition": [
      {
        'isAnd':0,//或  1且
        "symbol": "小于等于",
        "value": 10,
        "option": "电流"
      },
      {
        "symbol": "大于等于",
        "value": 20,
        "option": "电流"
      }
    ],
    "value": 12,
    "option": "电压"},
  {}
]

const resultConstant = [
  {
  "value": "电压",
  "option": "数值类型1",
  "value1": 14
  },
  {
    "value": "电流",
    "option": "数值类型2",
    "value1": 1
  }
]

function isValid(symbol, value, start, end) {
  if(symbol=="大于等于"){
    return value > start || value === start
  }
  if(symbol=="小于等于"){
    return value < start || value === start
  }
  if(symbol=="等于"){
    return value === start
  }
  if(symbol=="介于" && end){
    return value > start && value < end
  }
  return false
}

function findIndex(values = [], conditions = []) {
  if (values.length === 0 || conditions.length === 0) return -1
  let excludeIndex = -1
  let outerFoundIndex = conditions.findIndex((c) => {
    excludeIndex = values.findIndex(i => i.value === c.option && isValid(c.symbol, i.value1, c.value))
    return excludeIndex !== -1
  })
  if (outerFoundIndex !== -1) {
    const rest = values
      .filter((_, idx) => idx !== excludeIndex)
    const middle = rest
      .reduce((acc, current) => ({
        ...acc, [current.value]: []
      }), {})
    const childrenMap = conditions[outerFoundIndex].childCondition.reduce((acc, current) => {
      acc[current.option].push(current)
      return {
        ...acc
      }
    }, middle)
    // rest.some()

    const haveAnd = childrenMap[conditions[outerFoundIndex]].some(s => s.isAnd === 1)
    if (haveAnd) {
      // if ()
    }
    const checked = rest.every((e) => {
      const found = children.find(o => o[0].option === e.value)
      return found.every(s => isValid(s.symbol, e.value1, s.value, s.value1))
    })

    if (!checked) {
      outerFoundIndex = -1
    }
  }
  return outerFoundIndex
}

// console.log(findIndex(resultConstant, resultCondition))

function sayHello() {
  console.log(sayHello.name)
}

sayHello()
sayHello = new Proxy(sayHello, {
  apply(target, thisArg, argArray) {
    console.log('proxyHello')
    return Reflect.apply(target, thisArg, argArray)
    // return Reflect.apply(...arguments)
  }
})

sayHello()