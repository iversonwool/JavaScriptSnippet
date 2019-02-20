//1.slice
// 2.substring

let originalString = 'Hello, World!'

console.log(originalString.length) // 13

/**
 * slice
 */
//语法
//str.slice(beginSlice[, endSlice])

//参数
// beginSlice
// 从该索引（以 0 为基数）处开始提取原字符串中的字符。
// 如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度
// (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3)

// endSlice
// 可选。
// 在该索引（以 0 为基数）处结束提取字符串。
// 不包括endSlice
// 如果省略该参数，slice会一直提取到字符串末尾。
// 如果该参数为负数，则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度
// (例如，如果 endSlice 是 -3，则是, sourceLength - 3)。

//返回值
// 返回一个从原字符串中提取出来的新字符串


// 描述
// slice() 从一个字符串中提取字符串并返回新字符串。
// 在一个字符串中的改变不会影响另一个字符串。
// 也就是说，slice 不修改原字符串，只会返回一个包含了原字符串中部分字符的新字符串。
//
// 注意：slice() 提取的新字符串包括beginSlice但不包括 endSlice。
//
// 例1：str.slice(1, 4) 提取新字符串从第二个字符到第四个 (字符索引值为 1, 2, 和 3)。
//
// 例2：str.slice(2, -1) 提取第三个字符到倒数第二个字符。


console.log(originalString.slice(7)) //World!

console.log(originalString.slice(5, 6)) //,

console.log(originalString.slice(-2, -1)) //d
console.log(originalString.slice(-1)) //!


/**
 * substring
 * substr 已经不推荐使用
 */
//语法
// str.substring(indexStart[, indexEnd])

//参数
// indexStart
// 需要截取的第一个字符的索引，该字符作为返回的字符串的首字母。
// indexEnd
// 可选。
// 一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。


// 返回值
// 包含给定字符串的指定部分的新字符串。


// 描述
// substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。特别地：
//
// 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
// 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
// 如果任一参数小于 0 或为 NaN，则被当作 0。
// 如果任一参数大于 stringName.length，则被当作 stringName.length。
// 如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。