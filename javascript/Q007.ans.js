/* Answer
(1) デフォルト引数を使って、税込価格を計算する関数
    引数に税率が指定されていないのでtaxRateにデフォルト引数を設定が必要

(2) レストパラメータを使って、すべての引数の合計を返す関数
    第1引数にレストパラメーターを設置えすることで全引数を受け取れる

(3) 最初の引数に挨拶、残りの引数に名前を受け取り、
    すべての名前に挨拶する関数（デフォルト引数とレストパラメータの組み合わせ）

【解説１：デフォルト引数】
引数が省略されていた場合、デフォルト引数の値を使用。
・省略不可な引数の前にデフォルト引数を設定しない（意味がない）
・複数ある場合は、重要度順に設定するのがベター

【解説２：レストパラメーター】
残りの引数を配列として受け取る（可変長引数）
第1引数に設定することで全引数を受け取ることが可能
*/

// (1)
function calculatePrice(price, taxRate = 0.1) {
  return price * (1 + taxRate);
}

console.log(calculatePrice(1000)); // 1100
console.log(calculatePrice(1000, 0.08)); // 1080

// (2)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

// (3)
function greetAll(greeting, ...names) {
  return names.map((name) => `${greeting}, ${name}!`).join(" ");
}

console.log(greetAll("Hello", "太郎", "花子"));
// "Hello, 太郎! Hello, 花子!"

console.log(greetAll("Hi", "次郎"));
// "Hi, 次郎!"
