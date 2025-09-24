/* Answer
【正解】
(1) number
(2) string
(3) boolean
(4) null (※プログラム上はobjectと出力されてしまうがバグ)
(5) undefined
(6) object
(7) object
(8) object

【解説: リテラルの型】
`typeof`は指定した値のデータ型を返す演算子。

リテラルは値を表現するためのもので、JavaScriptのデータ型には
事前に用意されたリテラルがいくつかある。

(1)〜(4)のリテラルはプリミティブ型
(リテラルで定義された値はプリミティブ値とという)

(1)は数値リテラル(Number型)
(2)は文字列リテラル(String型)
(3)は真偽値リテラル(Boolean型)
(4)Nullリテラル(Null型)

(5)undefinedはプリミティブ値のundefinedを格納したグローバル変数。
   undefinedというリテラルは存在しないので注意。

(6)〜(8)リテラルは全てObject型となる
(6)配列リテラル
(7)オブジェクトリテラル
(8)正規表現リテラル

※ `typeof null`について
nullリテラルを持つプリミティブ型はNull型である。
しかしJavaScriptの仕様上、プログラムではObject型として扱われてしまう。
これはJavaScriptが型情報を下位ビットで表現しており、`000`で表現されるObjectとnullが誤認されてしまうのが原因。
詳細は以下を参照
https://qiita.com/shimi7o/items/da9db1c82164534c55b9
*/

console.log("(1)", typeof 42);
console.log("(2)", typeof "Hello");
console.log("(3)", typeof true);
console.log("(4)", typeof null);
console.log("(5)", typeof undefined);
console.log("(6)", typeof [1, 2, 3]);
console.log("(7)", typeof { name: "Bamtech" });
console.log("(8)", typeof /hello/g);
