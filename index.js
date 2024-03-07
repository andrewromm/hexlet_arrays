const array1 = ["Иван", "Мария", "Алексей", "Ольга", "Сергей", "Анна"];

array1.forEach((item) => console.log(`Привет, ${item}`));
console.log("-------------------\n");

let array2 = [1, 2, 3, 4, 5];
array2 = array2.map((item) => item * 10);
console.log(array2);
console.log("-------------------\n");

let array3 = [5, 12, 8, 130, 44];
array3 = array3.filter((item) => item >= 10);
console.log(array3);
console.log("-------------------\n");

const array4 = [
  { name: "Иван", age: 23 },
  { name: "Мария", age: 18 },
  { name: "Алексей", age: 32 },
  { name: "Ольга", age: 24 },
  { name: "Сергей", age: 17 },
  { name: "Анна", age: 21 },
];
const persons = array4
                  .filter((item) => item.age > 18)
                  .map((item) => `${item.name} (${item.age} лет)`);
console.log(persons);
console.log("-------------------\n");

const array5 = [
  {product: 'Телефон', price: 50000, quantity: 1}, 
  {product: 'Чехол', price: 1500, quantity: 2}, 
  {product: 'Зарядное устройство', price: 2500, quantity: 1}
];
const totalPrice = array5.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(totalPrice);
console.log("-------------------\n");