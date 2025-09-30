/* Question
出力される(1)〜(6)の値について答えよ。
エラーとなるものについては「エラー」と回答してください。
*/

console.log("(1)", 5 + 3);
console.log("(2)", true ? "yes" : "no");
console.log("(3)", if (true) { "yes" });

console.log("(4)", func1());
function func1() {
  return "func1";
}

const func2 = function () {
  return "func2";
};
console.log("(5)", func2());

const func3 = new Function('return "func3"');
console.log("(6)", func3());
