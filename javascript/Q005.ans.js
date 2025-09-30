/* Answer
【正解】
(1) 8
(2) yes
(3) エラー
(4) func1
(5) func2
(6) func3

【解説１: 式と文】
文は「何らかの処理をしてもらうためのもので変数に代入できない」
式は「評価後の値を変数に代入できる」

(1)は5 + 3を評価したものを変数に代入するので式。
(3)はif文であり、値の評価はしないので変数に代入できない
条件による評価をする場合は(4)のように三項演算子を使うと値を評価するので変数に代入できる

【解説２: 関数】
(4)
func1()は関数宣言文による定義。
文なので変数に代入はできない。
varと同様に再宣言やホイスティング（巻き上げ）ができてしまう。
実際に利用する際はStrictモードを適用する。

(5)
func2()は関数式による定義
式なので変数に代入可能。

(6)
JavaScriptの関数はFunctionオブジェクトを生成するリテラルである。
なのでfunc2で定義されてる関数などは、実はfunc3のように
Functionという組み込みオブジェクトから生成されたインスタンスである。
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
