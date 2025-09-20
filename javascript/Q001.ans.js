/* Answer01
【正解】
(1) Bob
(2) Alice
(3) John
(4) Charlie

【解説】
var変数には3つの問題がある。

1. 再宣言・再代入が可能
2. 変数が巻き上げ(Hoisting)される
3. スコープが関数単位

そのため(2)では定義されたuser1を再宣言・再代入が可能であり、
スコープが関数単位のため、(3)のようにif文内の変数も外部から参照が可能。

(4)ではuser3変数の宣言前に値を代入できてしまう(Hoisting)

このことからvarの使用は極力控える。
基本は再代入・再宣言が禁止されているconstか、再代入のみ許可しているletを使用。
*/

function processUserData() {
  var user1 = "Bob";
  console.log("(1)", user1);
  console.log("(1)", user1);

  if (true) {
    var user1 = "Alice";
    var user2 = "John";
  }
  console.log("(2)", user1);
  console.log("(3)", user2);

  user3 = "Charlie";
  console.log("(4)", user3);
  var user3;
}

processUserData();
