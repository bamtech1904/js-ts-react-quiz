/* Question
console.logでコメント通りの出力となるように
(1)〜(3)の関数式を完成させてください
*/

// (1) 必要な箇所を追記
function calculatePrice(price, taxRate) {
  return price * (1 + taxRate);
}

console.log(calculatePrice(1000)); // 1100
console.log(calculatePrice(1000, 0.08)); // 1080

// (2)
function sum(...numbers) {
  // ここを実装
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

// (3)
function greetAll(greeting, ...names) {
  // ここを実装
}

console.log(greetAll("Hello", "太郎", "花子"));
// "Hello, 太郎! Hello, 花子!"

console.log(greetAll("Hi", "次郎"));
// "Hi, 次郎!"
