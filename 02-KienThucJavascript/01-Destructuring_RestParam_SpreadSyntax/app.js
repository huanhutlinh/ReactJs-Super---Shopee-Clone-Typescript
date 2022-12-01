/**
 * Destructuring: bốc tách phần tử
 */

// Destructuring với object

const user = {
  name: "Linh Hua",
  age: 25,
  sex: "male",
};

// bình thường gán giá trị cho biến sẽ ntn
// const name = user.name;
// const age = user.age;
// const sex = user.sex;

//Destructuring: trong object user có các phần tử: name, age, sex. Bốc tách thì nằm trong {age, name, sex}= user. Ý nghĩa: lấy các tiên biến trong Object ra ngoài để chứa giá trị.
//Nếu muốn đổi tên biến trong object user là 1 biến khác thì xài ":", age: userAge, bây giờ age đã bị đổi tên thành userAge rồi nên age biến mất.
const { age: userAge, name, sex } = user;
console.log("Destructuring:", name, userAge, sex); //Destructuring: Linh Hua 25 male

/**--------------------------------------------- */
// Destructuring với array

const list = [
  1,
  function (a, b) {
    return a + b;
  },
];

const [value, sum] = list; // giờ value nó đại diện cho 1, còn sum thành function(a,b)
console.log("value:", value); //1
console.log("sum:", sum(2, 3)); //5

/**--------------------------------------------- */
/**
 * Spread Syntax: {...arr}
 */

const user2 = {
  name: "Linh",
  age: 25,
  ability: ["coding"],
};
const cloneUser = user2; // này là giống nhau về nội dung và giống nhau về địa chỉ vùng nhớ luôn
console.log(cloneUser === user2); //true

// shallow copy (copy nông)
const cloneUserSpread = { ...user2 };

console.log(cloneUserSpread === user); //false, vì bây giờ nội dung bên trong thì nó giống nhau, nhưng khác địa chỉ

// Lưu ý: nó chỉ clone địa chỉ ra ngoài địa chỉ khác, chứ so sánh nội dung thì như nhau
console.log(user2.ability);
console.log(cloneUserSpread.ability === user2.ability); //trưe, do cả 2 đều đang chứa ["coding"]

/**--------------------------------------------- */
/**
 * Rest Parameter:
 */

const handle = (a, b, ...c) => {
  return c;
};

const valueRest = handle(1, 2, 3, 4, 5, 6);
console.log("valueRest:", valueRest); //valueRest: (4) [3, 4, 5, 6]
//a:1, b:2, c giờ là nó đại diện cho mảng 3,4,5,6

const handle2 = ({ a, b, ...c }) => {
  return c;
};

const value2 = handle2({ a: 1, b: 2, c: 3, d: 4, e: 5 });

console.log("value2:", value2); //value2: {c: 3, d: 4, e: 5}
