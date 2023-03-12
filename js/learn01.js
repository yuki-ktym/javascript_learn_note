// コメントアウト1
/*
コメントアウト2
コメントアウト2
*/

// ログの表出、現在時刻の取得、テキストの表出
console.log("hellow", "it's", new Date(), "now")

// 四則演算
console.log(100 + 200)
console.log(200 - 80)
console.log(100 * 3)
console.log(400 / 5)
console.log(402 % 5)
console.log(2 ** 3)

// 変数
// さまざまな代入が可能※メソッド、function
let myName = "let_kitayama"
console.log(myName)
let timeDate = new Date()
let myFunction = () => {
  const number = 20
  return number
}
console.log(myFunction)

// letは再代入可能、再宣言できない
myName = "let_yuki"
console.log(myName)

// 変数同士の演算（数値、文字列も可能）
let letNumber20 = 20
let letNumber30 = 30
let letText = "合計"
let letSum = letText + (letNumber20 + letNumber30)
console.log(letSum)

// 複数の変数をまとめて定義する※定義がなければundefined
let a = 1, b = 2, c
console.log(a + b)
console.log(c)

// 定数
// 再代入はできない、演算可能
// 定義されていなかった場合でもundefinedは返さないので必ず定義する
const constName = "const_kitayama"
console.log(constName)
// 配列は再代入可能
const constArray = [
  "name",
  "age",
  "sex"
]
console.log(...constArray)
constArray[0] = "middle_name"
console.log(...constArray)

// 比較演算子
console.log("kitayama" == "kitayama")//true
console.log("kitamura" == "kitayama")//false
console.log("10" === "10")//true
console.log("10" === 10)//false
console.log("10" != "10")//false
console.log(10 !== 10)//false
console.log(10 < 30)//true
console.log(10 > 30)//false
console.log(10 <= 30)//true
console.log(10 >= 30)//false
const array1 = [1, 2, 3]
const array2 = [1, 2, 3]
const array3 = [1, 2, 3]
const array4 = array3
console.log(array3 == array4)//同じ配列なのでtrue
console.log(array1 == array2)//中身が同じでも、違う配列なのでfalse

// 複合代入演算子
// 計算などを簡略化したい時
/*
x = y   //x = y
x += y  //x = x + y
x -= y  //x = x - y
x *= y  //x = x * y
x **= y //x = x ** y
x /= y  //x = x / y
x %= y  //x = x % y
*/

let compound_a = 10
let compound_b = 5
compound_a += compound_b
console.log(compound_a)

