//1.新建的两种方式
let regexp1 = /xyz/
let regexp2 = new RegExp('xyz')

let regexp3 = new RegExp('xyz', 'i')
//等价于
let regexp4 = /xyz/i

//2.实例属性分为两类
//一类：修饰符相关，返回一个布尔值
RegExp.prototype.ignoreCase //是否设置i属性
RegExp.prototype.global //g属性
RegExp.prototype.multiline //m属性
//上面属性只读

console.log(regexp3.ignoreCase)

//3.实例方法
//RegExp.prototype.test
console.log(regexp1.test('x'))
console.log(regexp1.test('xyzabc'))

// RegExp.prototype.exec()
const s = '_x_x'
const r = /x/

console.log(r.exec(s))

//////////////////////////////////////////////////////////
//4.字符串的实例方法

// 字符串的实例方法之中，有4种与正则表达式有关。
// String.prototype.match()：返回一个数组，成员是所有匹配的子字符串。
// String.prototype.search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
// String.prototype.replace()：按照给定的正则表达式进行替换，返回替换后的字符串。
// String.prototype.split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员

console.log(s.match(r))

//将a全部替换成b
console.log('aaa'.replace(/a/g, 'b'))


//5.匹配规则

///5.1：字面量字符和元字符
//字符在正则表达式中，就是字面的含义
// 比如/a/匹配a，/b/匹配b。
//除了字面量字符以外，还有一部分字符有特殊含义，不代表字面的意思。
// 它们叫做“元字符”（metacharacters）


//////（1）点字符（.)

console.log(/c.t/.test('cat'))
console.log(/c.t/.test('caat'))
console.log(/c..t/.test('caat'))

//////（2）位置字符(^ $)
// ^ 表示字符串的开始位置
// $ 表示字符串的结束位置

// test必须出现在开始位置
console.log(/^test/.test('test123')) // true

// test必须出现在结束位置
console.log(/test$/.test('new test')) // true

// 从开始位置到结束位置只有test
console.log(/^test$/.test('test')) // true
console.log(/^test$/.test('test test')) // false
console.log(/^test$/.test('testtest')) // false


//////（3）选择符（|）
console.log(/11|22/.test('911'))

//////其他的元字符还包括\、\*、+、?、()、[]、{}等，将在下文解释。


///5.2转义符
// 正则表达式中那些有特殊含义的元字符，如果要匹配它们本身，就需要在它们前面要加上反斜杠。
// 比如要匹配+，就要写成\+。

console.log(/1+1/.test('1+1'))//false
console.log(/1\+1/.test('1+1'))//true
// 正则表达式中，需要反斜杠转义的，一共有12个字符：^、.、[、$、(、)、|、*、+、?、{和\。
// 需要特别注意的是，如果使用RegExp方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。

console.log((new RegExp('1\+1')).test('1+1')) // false
console.log((new RegExp('1\\+1')).test('1+1')) // true

///5.3特殊字符

// \cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。
// [\b] 匹配退格键(U+0008)，不要与\b混淆。
// \n 匹配换行键。
// \r 匹配回车键。
// \t 匹配制表符 tab（U+0009）。
// \v 匹配垂直制表符（U+000B）。
// \f 匹配换页符（U+000C）。
// \0 匹配null字符（U+0000）。
// \xhh 匹配一个以两位十六进制数（\x00-\xFF）表示的字符。
// \uhhhh 匹配一个以四位十六进制数（\u0000-\uFFFF）表示的 Unicode 字符。


///5.4字符类
// 比如[xyz] 表示x、y、z之中任选一个匹配。

console.log(/[abc]/.test('hello world')) //false
console.log(/[abc]/.test('apple'))//true

// 有两个字符在字符类中有特殊含义。
// （1）脱字符（^）
// 如果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可以匹配。

console.log(/[^abc]/.test('hello world')) //true
console.log(/[^abc]/.test('bbc'))// false


// 如果方括号内没有其他字符，即只有[^]，就表示匹配一切字符，其中包括换行符。
// 相比之下，点号作为元字符（.）是不包括换行符的。

////////////////////////////////////////////////////////////////
// 注意，脱字符只有在字符类的第一个位置才有特殊含义，否则就是字面含义。/////
////////////////////////////////////////////////////////////////

// （2）连字符（-）

// 某些情况下，对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围。
// 比如，[abc]可以写成[a-c]，[0123456789]可以写成[0-9]，同理[A-Z]表示26个大写字母。

console.log(/a-z/.test('b')) //false
console.log(/[a-z]/.test('b'))//true

///5.5预定义模式
// \d 匹配0-9之间的任一数字，相当于[0-9]。
// \D 匹配所有0-9以外的字符，相当于[^0-9]。
// \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
// \W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
// \s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
// \S 匹配非空格的字符，相当于[^ \t\r\n\v\f]。
// \b 匹配词的边界。
// \B 匹配非词边界，即在词的内部。

///5.6重复类
//模式的精确匹配次数，使用大括号（{}）表示。
// {n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次。


///5.7量词符

// ? 问号表示某个模式出现0次或1次，等同于{0, 1}。
// * 星号表示某个模式出现0次或多次，等同于{0,}。
// + 加号表示某个模式出现1次或多次，等同于{1,}。



///5.8贪婪模式
//上一小节的三个量词符，默认情况下都是最大可能匹配，即匹配直到下一个字符不满足匹配规则为止。这被称为贪婪模式。
// 如果想将贪婪模式改为非贪婪模式，可以在量词符后面加一个问号。
// 非贪婪模式，一旦条件满足，就不再往下匹配。


///5.9修饰符

// 修饰符（modifier）表示模式的附加规则，放在正则模式的最尾部。
//
// 修饰符可以单个使用，也可以多个一起使用。

///5.10组匹配
///（1）概述

console.log(/fred+/.test('fredd')) //true
console.log(/(fred)+/.test('fredfred')) //true
///（2）非捕获组

///（3）先行断言
///（4）先行否定断言
