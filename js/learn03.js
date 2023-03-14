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
// 指定の小数点以下を除外
const myNumericalValue = 123.45678901
console.log(myNumericalValue.toFixed(3))
console.log(myNumericalValue.toFixed(15))
// 指定の精度に変換
console.log(myNumericalValue.toPrecision(3))
console.log(myNumericalValue.toPrecision(15))



/*
文字列の取り扱い
*/
// シングルクオート、ダブル、バックで表記可能
const myName = [
  "JAVAさん",
  'SCさん',
  `RIPTさん　　　　`,
]
console.log(...myName)
// 文字列の長さ取得
console.log(myName[0].length)
console.log(myName[1].length)
console.log(myName[2])
// 空白を除外
console.log(myName[2].trim())

// 例：テキストエリアから文字数カウント
let textarea = document.querySelector('#textarea')
let string_num = document.querySelector('#string_num')

// 入力された時に発火するよう定義
textarea.addEventListener('keyup', onKeyUp)
function onKeyUp() {
  const inputText = textarea.value
  string_num.innerText = inputText.length
}

// 文字列検索
const searchString = myName.indexOf("SCさん")
console.log(searchString)

// 文字列の指定した箇所を操作（0を含むので4番目となる）
const charText = "javascript"
console.log(charText.charAt(3))//指定した文字を取得
console.log(charText.slice(0, 4))//範囲で切り取る
console.log(charText.slice(4, 10))//範囲で切り取る
console.log(charText.substring(0, 4))//上に同じ※マイナス値の処理が違う
console.log(charText.substring(4, 10))
console.log(charText.replace("script", ""))//置き換える
// 文字列の分割
const myUri = "https://www.google.com/search?q=javascript&oq=javascript&aqs=chrome.0.69i59l2j0i131i433i512l3j69i60l3.2482j0j7&sourceid=chrome&ie=UTF-8"
console.log(myUri.split("&"))//区切る文字値を指定できる
console.log(myUri.split(/&|\?/))//正規表現での指定
console.log(myUri.split(""))//空白にすると文字ごと分割

// 文字列の結合
const textSmpleJava = "java"
const textSmpleScript = "script"
console.log(textSmpleJava + textSmpleScript)
console.log(`${textSmpleJava}${textSmpleScript}`)
console.log(textSmpleJava.toLowerCase())
console.log(textSmpleJava.toUpperCase())

//正規表現のメリット、①のように毎回指定せずに②のように省略して記述できる
const iPhone = navigator.userAgent.includes("iPhone")
const iPad = navigator.userAgent.includes("iPad")
const iPod = navigator.userAgent.includes("iPod")
if (iPhone || iPad || iPod) {//①
  console.log("アクセス")
}
if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {//②
  console.log("アクセス")
}

