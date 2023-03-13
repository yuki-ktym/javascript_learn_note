/*
数値の取り扱い
*/

// 四捨五入※結果：9
let countNumber = Math.round(8.5)
console.log(countNumber)
// 切り捨て（数値以下の最大の整数）※結果：8
let floorNumber = Math.floor(8.5)
console.log(floorNumber)
// 切り上げ（数値以上の最小の整数）※結果：9
let ceilNumber = Math.ceil(8.5)
console.log(ceilNumber)
// 数値の整数を返す※結果：8
let truncNumber = Math.trunc(8.5)
console.log(truncNumber)

// ランダムな数値（0以上1未満）
let randomNumber = Math.random()
console.log(randomNumber)
// ランダム値制御例
let floorRandomNumber = Math.floor(Math.random() * 1000)
console.log(floorRandomNumber)


/*
文字列の取り扱い
*/
// シングルクオート、ダブル、バックで表記可能
const myName = [
  "JAVAさん",
  'SCさん',
  `RIPTさん`,
]
console.log(...myName)
// 文字列の長さ取得
console.log(myName[0].length)
console.log(myName[1].length)
console.log(myName[2].length)