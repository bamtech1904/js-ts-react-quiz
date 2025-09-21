/* Answer
【正解】
(1) Hello
(2) [String: 'Hello']
(3) string
(4) object
(5) false
(6) Konnitiwa
(7) Konnitiwa

【解説: プリミティブ型とラッパーオブジェクト】
JavaScriptではプリミティブ値にアクセスする際、自動的に対応するラッパーオブジェクトに変換する挙動になる。
ラッパーオブジェクトは標準組み込みオブジェクトとして定義されているので、オブジェクトのメソッド的なものもプリミティブ値で使える。

プリミティブ型 ≠ オブジェクト であり、メソッドは使えるが、リテラル上で定義されたプリミティブ値は
プリミティブ型でありオブジェクトではない点に注意。

ラッパーオブジェクトは内部にプリミティブ値を保持する挙動となるため、(2)のように配列上で管理される。
プリミティブ値のようにアクセスする際は`str2.valurOf()メソッドでアクセスが可能`。

またラッパーオブジェクトに自動変換された値のプリミティブ型は維持される。
なので(5)のようにStringオブジェクトからインスタンス生成されたstg2とは型は異なる。
*/

const str1 = "Hello";
const str2 = new String("Hello");

console.log("(1)", str1);
console.log("(2)", str2);

console.log("(3)", typeof str1);
console.log("(4)", typeof str2);
console.log("(5)", str1 === str2);

console.log("(6)", str1.replace("Hello", "Konnitiwa"));
console.log("(7)", str2.replace("Hello", "Konnitiwa"));
