

function addLogin(logins, login) {
    logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

    console.log(logins);

    if (checkLoginValidity(login) === true){
        console.log(`ok`);
    } else {
        alert(`Ошибка! Логин должен быть от 4 до 16 символов`);
        return;
    }

    if (checkIfLoginExists(logins, login) === false){
        logins.push(login)
        alert(`Логин успешно добавлен! ${login}`)
        console.log(logins);
    } else {
        alert(`Такой логин уже используется!`);
    }

    function checkLoginValidity(login) {
        if (login.length < 4 || login.length > 16){
            return false;
        } else {
            return true;
        }
    }

    function checkIfLoginExists(logins, login){
        if (logins.includes(login)){
            return true;
        } else {
            return false;
        }
    }

}



addLogin(``, prompt(`Введите логин`));
