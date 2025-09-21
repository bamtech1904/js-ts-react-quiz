/* Answer
【正解】
(1) true
(2) true
(3) true
(4) false

【解説】
Number.isNaN()は値がNaN(Not a Number: 数値ではないNumber型)かどうかを判定する関数。
Number.isNaN()はNumberオブジェクトのメソッドとして定義されている。
isNaN()はグローバル関数でどこからでも呼び出せるが、暗黙の型変換により正常な判定が行えないため非推奨。
*/

console.log("(1)", isNaN(NaN));
console.log("(2)", Number.isNaN(NaN));

console.log("(3)", isNaN("hello"));
console.log("(4)", Number.isNaN("hello"));
