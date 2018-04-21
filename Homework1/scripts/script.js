// sharm - 15, hurgada - 25, taba - 6.

let sharm = 15;
let one = ` sharm`;

let hurgada = 25;
let two = `hurgada`;

let taba = 6;
let three = `taba`;



let user = +prompt(`Введите количество мест`);

if (!Number.isInteger(user) || user < 1){
    alert(`Ошибка ввода`);
} else {
    console.log(`ok`);
if (taba >= user) {
    t = confirm(`Есть места в группе ${three}`);
    if (t === true){
        taba--;
        alert(`Приятного путешествия в группе ${three}`);
    } else {
        if(t === false){
            if (sharm >= user){
                s = confirm(`Есть места в группе ${one}`);
                if (s === true){
                    alert(`Приятного путешествия в группе ${one}`);
                } else {
                    if (hurgada >= user){
                      h = confirm(`Есть места в группе ${two}`);
                      if (h === true){
                          alert(`Приятного путешествия в группе ${two}`);
                      } else {
                          alert(`К сожалению нету свободных групп`);
                      }
                    }
                }
            }

        }
    }
} else {
    alert(`error`);
}
}