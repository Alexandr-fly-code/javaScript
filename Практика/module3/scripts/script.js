/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null



// function getPX(str) {
//     if (str === `10px`){
//         return str.split(`px`).join(``);
//     } else {
//         return null;
//     }
//
// }
//
// console.log(getPX(`10px`));


/Задание 2/

/*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/


// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'
//
// console.log(
//     findLongestWord("Google do a roll")
// ); // вернет 'Google'
//
// console.log(
//     findLongestWord("May the force be with you")
// ); // вернет 'force'

let arr = [];
let resault;
function findLongestWord(str) {

   return arr[str];
}

console.log(findLongestWord(prompt(`Введите строку`)));

// var arr = ['first item', 'second item is longer than the third one',
//     'third longish item'];
//
// var lgth = 0;
// var longest;

// for(var i=0; i < arr.length; i++){
//     if(arr[i].length > lgth){
//         var lgth = arr[i].length;
//         longest = arr[i];
//     }
// }
//
// alert(longest);