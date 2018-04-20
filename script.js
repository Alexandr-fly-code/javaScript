let sharm = 15;

let hurgada = 25;

let taba  = 6;

let textSharm = `Sharm`;

let textHurgada = `Hurgada`;

let textTaba = `taba`;

let user = +prompt(`Введите небходимое количество мест`);

if (!Number.isInteger(user)|| user < 1) {
    alert(`Ошибка ввода`);
} else {
    console.log(`ok`);
    if (taba >= user) {

        let conf = confirm(`Есть места в группе ${textTaba}`);
        if (conf === true){
            taba--;
            alert(`Приятного путешествия в группе ` +textTaba);
        } else {
            alert(`Нам очень жаль, приходите еще!`);
        }
    } else if(sharm >= user){
        let conf = confirm(`Есть места в группе ` +textSharm);
        if (conf === true){
            sharm--;
            alert(`Приятного путешествия в группе ` +textSharm);
        } else {
            alert(`Нам очень жаль, приходите еще!`);
        }
    } else if (hurgada >= user){
        let conf = confirm(`Есть места в группе ` +textHurgada);
        if (conf === true){
            hurgada--;
            alert(`Приятного путешествия в группе ` +textHurgada);
        } else {
            alert(`Нам очень жаль, приходите еще!`);
        }
    }
}




if (user >= 26){
    alert(`Мест нет`);
}

// if (user <= sharm) {
//     confirm(`Есть места в группе ` +textSharm);
//     sharm--;
// } else {
//     alert(`Мест нет`);
// }
//
// if (user <= hurgada) {
//     confirm(`Есть места в группе ` +textHurgada);
// } else {
//     alert(`Мест нет`);
// }