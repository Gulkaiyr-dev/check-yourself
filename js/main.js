// №1
// let str = "aacbcc"
// выведите часто повторяющийся символ
// Вывод: с

// let str = "aacbcc";
// let obj = {};
// for (let letter of str) {
//   if (obj[letter]) obj[letter]++;
//   else obj[letter] = 1;
// }
// let max = 1;
// let mostFreq;
// for (let key in obj) {
//   if (max < obj[key]) {
//     max = obj[key];
//     mostFreq = key;
//   }
// }

// console.log(mostFreq);

// №2
// let arr = [1, 1, 2, 1, 3, 3, 3]
// выведите самое уникальное число
// Вывод: 2

// let arr = [1, 1, 2, 1, 3, 3, 3];
// let obj = {};
// for (let num of arr) {
//   if (obj[num]) obj[num]++;
// }
// let uniq;
// for (let key in obj) {
//   if (obj[key] == 1) {
//     uniq = obj[key];
//   }
// }
// console.log(uniq);

// №3
// let arr = [1,2,2,2,3,3,3,3,4,4,4,1]
// вывести количество чисел которые повторились 3 раза,
// Вывод: 2

let arr = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 1];
let obj = {};
for (let num of arr) {
  obj[num];
}

let count;
for (let key in obj) {
  if (obj[key] === 3) {
    count++;
  }
}

console.log(count);

//? Вывести хеш таблицу
// let str = "Hello"
// Вывод: {H:1, e:1, l:2, o:1}

//! let arr=["hello","js",14,"world",14,"world"];
// let obj={};
// let (let value of arr){
//     if(obj[value])obj[value]++;
//     else obj[value]=1;
// }
// console.log(obj);
