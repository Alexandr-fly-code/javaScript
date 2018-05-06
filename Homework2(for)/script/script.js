



const numbers = [];


let total = true;

while (total){

    let userInput = prompt(`Введите число!`);


    if (Number.isInteger(+userInput)){

        if (userInput !== null){
            numbers.push(+userInput);
        } else {

            let sum = 0;

            for (let counter of numbers) {
                sum += counter;
            }

            alert(`Общая сумма чисел равна ${sum} ;)`);
            break;
        }

    } else {
        alert(`Было введено не число, попробуйте еще раз :)`);
    }



/Мысли которые приходили в голову/



    // +parseInt(userInput);
    // console.log(userInput);

//
//     // if (userInput !== NaN){
//     //     console.log(`ok`);
//     // } else {
//     //     alert(`Данные введены не корректно`);
//     //     break;
//     // }
// //
//     if (userInput !== null){
//         numbers.push(+userInput);
//     } else {
//         break;
//         // if (usisNaN())
//     }
//
//
//     console.log(typeof (numbers));
//     console.log(numbers);


}


// let userInput = prompt(`Введите число`);
// if (userInput === NaN){
//     console.log(userInput);
// } else {
//     console.log(typeof(userInput));
// }


// for (let counter of numbers){
//
//             counter += counter.length;
//             console.log(counter);
//
// let sum = 0;
//             for(let i = 0; i < numbers.length; i++){
//                 sum += numbers[i];
//             }
//             console.log(sum);

// if (total = false) {
//     f
//
//
// }