// 関数
// 定義（関数名、引数※引数与えないこともできる、処理内容）
// returnで戻す
// 関数名()で実行
function myfunction(a, b, c) {
  const ruselt = a + b + c
  return ruselt
}
// reruenが不要の場合、省略可能
// returnを記載することにより処理を終了できるので、なるべくつけるが良い（returnのみで可能）
function functionConsole() {
  console.log("HELLOW")
  return
}
// アロー関数
const arrowFunction = (a, b, c) => {
  const ruselt = a + b + c
  return ruselt
}
console.log(arrowFunction(1, 1, 3))//5が出力される
// 引数が1個の時に()を省略できる（0個と2個以上の時はNG）
const arrowFunctionOne = a => {
  return a + 2
}
console.log(arrowFunctionOne(3))//5が出力される

// 条件分岐
//条件が一つの場合中括弧を省略できるが見通しが悪くなるので省略しないほうが良い
const price = 10
if (price < 5) {
  // 処理
} else if (price < 8) {
  // 処理
} else {
  // 処理
}

// 条件切り替えswitch文
// switchは厳密に判定される
// default時の処理に指定がなければ省略可能
const food = "sushi"

switch (food) {
  case "sushi":
    console.log("sushi")
    break
  case "katudon":
    console.log("katudon")
    break
  case "pasta":
    console.log("soba")
    break
  // 複数条件も可能
  case "udon":
  case "soba":
    console.log("udonかsoba")
    break
  default:
    console.log("一致しません")
}

// 処理の繰り返しfor文
// 初期値、反服条件、処理、{結果}
for (let index = 0; index < 10; index++) {
  console.log(index)
}

// 条件が満たされるまで繰り返し処理while
let whileNumber = 0;
while (whileNumber < 5) {
  whileNumber += 1;
  console.log(whileNumber)
}
// 反復処理のスキップ
// スキップを条件ごと定義することによりネストを浅くできる
for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    continue
  }
  console.log(index)
}
