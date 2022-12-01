const a = true;
const b = "";
const c = "Hi";

const d = a && b && c; // ''
console.log("d", d); // d, rỗng

/**---------------------------------------- */
let check = 10;
const handle = () => {
  return [1, 2, 3].map((item) => item * 2);
};
let value = [];
if (check > 9) {
  value = handle();
}
console.log("value", value); //value (3) [2, 4, 6]
value = check < 9 && handle();
console.log("value", value); //value false

/**---------------------------------------- */

let fname = "alex";
//Toán tử 3 ngôi: (điều kiện)? true: flase, đúng trước, sai sau
fname === "alex" ? console.log("true") : console.log(false); //true

/**---------------------------------------- */

// let user = {};
// alert(user.adress.street); // undefined

let user = "";
let value2 = user ?? "Hello";

// null, undefined, 0, '', NaN, 0n
// let value = user || 'Hello'

console.log("value2", value2);

/**---------------------------------------- */

let string = `tempalate`;

const sum = (a, b) => a + b;

let result = "string text " + string + " string text";

console.log("result:", result); //result: string text tempalate string text

let kqc = `string text ${sum(1, 2)} string text`;
console.log("kqc:", kqc); //kqc: string text 3 string text
