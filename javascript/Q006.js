/* Question
以下の(1)〜(3)function関数式をアロー関数式で書き直してください。
*/

// (1)
const add = function (a, b) {
  return a + b;
};

// (2)
const double = function (num) {
  return num * 2;
};

// (3)
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
