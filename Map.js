//对象只能用字符串作key

//当一个对象使用对象作为key的时候 会自动转化
//此时的key为[object Object]

const obj = { a: 1 }


const xObj = {}
xObj[obj] = 'objKey'

console.log(xObj['[object Object]']) //'objKey'


////////////////////////////////////////基本用法//////////////////
//Map - 各种类型的值（包括对象）都可以当作键。
//Object 结构提供了“字符串—值”的对应，
// Map 结构提供了“值—值”


//demo
const m = new Map()

m.set(obj, 'content')
console.log(m.get(obj)) //content

console.log(m.has(obj)) //true


console.log('-----------------------------------')
/////////////////////////使用数组初始化Map/////////
//作为构造函数，Map 也可以接受一个数组作为参数。
// 该数组的成员是一个个表示键值对的数组。

const map = new Map([
  ['name', 'lily'],
  ['age', 34]
])

console.log(map.size)// 2

// Map构造函数接受数组作为参数，实际上执行的是下面的算法。
const items = [
  ['name', 'lily'],
  ['age', 34]
]

const aMap = new Map()

items.forEach(([key, value]) => aMap.set(key, value))

// 事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数。
// 这就是说，Set和Map都可以用来生成新的 Map。


// ******************如果对同一个键多次赋值，后面的值将覆盖前面的值。************************//
const bMap = new Map()
bMap
  .set(1, 'a')
  .set(1, 'b')
console.log(bMap.get(1)) // 'b'


//如果读取一个未知的键，则返回undefined。

console.log(new Map().get('hello')) //undefined


/**
 * 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
 */
const cMap = new Map()
cMap.set([1], 333)
console.log(cMap.get([1])) //undefined

/**
 * Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
 * 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，
 * 虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
 */


///////////////////////////实例属性和操作方法/////////////////////////////////

//1 size

//2 set(key, value)

//3 get(key)

//4 has(key)

//5 delete

//6 clear


console.log('----------------------------------------------------------')
////////////////////////////////遍历方法////////////////////////////////////////

const dMap = new Map([
  ['f', 'no'],
  ['t', 'yes']
])

//keys
for (const key of dMap.keys()) {
  console.log(key)
}


for (const value of dMap.values()) {
  console.log(value)
}

for (const item of dMap.entries()) {
  const [key, value] = item
  console.log(key, '-', value)
}

for (const [key, value] of dMap) {
  console.log('[', key, value, ']')
}


console.log('----------------------')
/////////////////////////////////////////////Map与其他数据结构的转换/////////////////////

//1. map => array

const fMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])

console.log([...fMap.keys()])
console.log([...fMap.values()])
console.log([...fMap.entries()])
console.log([...fMap])

fMap.forEach((value, key, map) => {
  console.log(value, key, map)
})


// forEach方法还可以接受第二个参数，用来绑定this。

const reporter = {
  report: function (key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

map.forEach(function (value, key, map) {
  this.report(key, value);
}, reporter);

//2 array => map


//3 map => object
// 如果所有 Map 的键都是字符串，它可以无损地转为对象。
// 如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
const myObj = strMapToObj(myMap)
console.log(myObj)

//4 object => map

function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

console.log(objToStrMap({ yes: true, no: false }))
