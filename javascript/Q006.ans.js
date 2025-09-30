/* Answer
【正解】
(1)本文はreturn文のみの場合は省略可能
(2)引数が1つの場合は()を省略可能だが、最近は省略しない表記が主流
(3)コールバック関数をアロー関数式に変換

【解説１：function関数式とアロー関数式】
メインアプリケーションロジックや再利用前提の関数の場合はfunction関数式を利用。
短い処理やインライン関数などについてはアロー関数式を利用。

【解説２：無名関数】
funcrion(){...}の関数名が定義されてない関数。
変数に代入しないとその場で消滅する(メモリ上に記憶されない)
関数式は無名関数を生成し、メモリ上に残したもの。
*/

// (1)
// 元のコード
const add = function (a, b) {
  return a + b;
};

// 解答
const add_arrow = (a, b) => a + b;
// 解説:

// (2)
// 元のコード
const double = function (num) {
  return num * 2;
};

// 解答
const double_arrow = (num) => num * 2;

// (3)
const numbers = [1, 2, 3, 4, 5];
// 元のコード
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});

// 解答
const evens_arrow = numbers.filter((num) => num % 2 === 0);
