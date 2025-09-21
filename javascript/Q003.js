/* Question
出力される(1)〜(7)の値について答えよ
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
