



const numbers = [];


let total = true;

while (total) {

    let userInput = prompt(`Введите число!`);


    if (Number.isInteger(+userInput)) {

        if (userInput !== null) {
            numbers.push(+userInput);
            // console.log(userInput);
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
    console.log(numbers);
}
