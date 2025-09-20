/* Question001
processUserData()関数実行時に出力される(1)〜(4)の値について答えよ
*/

function processUserData() {
  var user1 = "Bob";
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
