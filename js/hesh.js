// №1
// [1, -2, 3, -4, -5] => [-1, 2, -3, 4, 5]

// let arr = [1, -2, 3, -4, -5];
// let res = [];
// for (let i of arr) {
//   res.push(i * -1);
// }
// console.log(res);

// №2
// вы должны возвращать новый массив в котором, сумма первого элемента первого массива с первым элементом второго массива, и.т.д.
// [1, 2, 3], [2, 4, 5] => [3, 6, 8]
// //! длина массивов всегда равны

// let arr1 = [1, 2, 3];
// let arr2 = [2, 4, 5];
// let res = [];
// for (let i = 0; i < arr1.length; i++) {
//   // i - 0,1,2
//   // arr1[i] - 1,2,3
//   // arr2[i] - 2,4,5
//   res.push(arr1[i] + arr2[i]);
// }
// //1. [arr1[0] + arr2[0]]
// //2. [arr1[1] + arr2[1]]
// //3. [arr1[2] + arr2[2]]

// №3
// Вам дано число n
// Добавьте в массив каждую цифру этого числа
// 123 --> ["1", "2", "3"]
// let n = 123;
// let res = [];
// for (let i of n.toString()) {
//   res.push(i);
// }
// console.log(res);

// let n = 123;
// let arr = [];
// for (let num of n.toString()) {
//   arr.push(num);
// }
// console.log(arr);

// №4
// Вам дан массив, отфильтруйте оставив только числы
// => [1, 2, NaN];

// let filtering = [1, true, 2, "hello", false, {}, NaN];
// let num = [];
// for (let i of filtering) {
//   if (typeof i == "number") {
//     num.push(i);
//   }
// }
// console.log(num);

// №5
// Найдите самую длинную строку в предложении
// "bitcoin take over the world maybe who knows perhap" --> "bitcoin"

//  let str="bitcoin take over the world maybe who knows perhap";
//  let arr=str.split(" ")
//  let max=arr[0]
// for (let i of arr){
// if(max.length < i.length){
//     max=i
// }
// }
// console.log(max);

// №6
// Найдите маленькое значение в строке
// "1 2 3 4 5" => 1
// "45 10 20 30 5" => 5

// №7
// удалите каждый второй элемент...
// ["Sun","Moon","Sun","Moon","Sun"] --> ["Sun","Sun","Sun"]
// ["Moon","Sun","Moon"] --> ["Moon","Moon"]

// let arr1 = ["Sun", "Moon", "Sun", "Moon", "Sun"];
// let res = [];
// for (let i in arr1) {
//   if (i % 2 === 0) {
//     res.push(arr1[i]);
//   }
// }
// console.log(res);

// №8
// преобразуйте каждые вторые элементы в массиве в заглавные буквы
// ["hello","world","John","moon","Sun"] --> ["hello","WORLD","John","MOON","Sun"]

// let arr = ["hello", "world", "John", "moon", "Sun"];
// for (let i = 0; i > arr.length; i++) {
//   if (i % 2 === 0) {
//     res.push(arr[i].toUpperCase());
//   }
// }

// №9
// найдите сумму двух массивов
// sumOfArrays([1, 2, 3], [4, 5, 6] ) --> 21

//! №10
// напишите функцию которая оставит нечетные числа в новом массиве
// [1,2,3,4,5,6] => [1, 3, 5]

// let arr = [1, 2, 3, 4, 5, 6];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// №11
// найдите сумму перемешанного массива
// [9, 3, '7', '3'] --> 22
// ['5', '0', 9, 3, 2, 1, '9', 6, 7] --> 42

// let arr1=[9, 3, '7', '3'];
// let arr2=['5', '0', 9, 3, 2, 1, '9', 6, 7]
// let sum=0;

// for(let i=0;i<arr1.length;i++){

// }

// №12
// дан массив, вернуть результат умножения значений по порядку
// [1, 2, 3, 4] => 24, так как 1 * 2 * 3 * 4 = 24

// №13
// удвойте числа в массиве
// [1, 2, 3] --> [2, 4, 6]
// [10,20,30] --> [20,40,60]
