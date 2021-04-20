// Задание 1
function getNumber(num){
    var objNumber = {};
    if(num >= 0 && num <= 999){
        objNumber.hund = Math.floor(num / 100);
        objNumber.dec = Math.floor((num % 100)/10);
        objNumber.units = Math.floor(num % 10); 
        console.log(objNumber.hund + " " +objNumber.dec + " " +objNumber.units);
        return objNumber; 
    }
    console.log("Ввели некоректное число");
    return objNumber;
}
console.log(getNumber(-10));
console.log(getNumber(1000));
console.log(getNumber(873));
console.log(getNumber(564));

// Задание 2
//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var e, ok;

var answers = [];
 function doD(){
    do {
        ok = false;
        e = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
        if (e == -1) {
            break;
        }
        else {
            ok = isAnswer(works.d0, e);
        }
    } while (!ok);
 }

do {//Выводим первый вопрос
    ok = false;
    e = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (e == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, e);
    }
} while (!ok);
switch (e) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            e = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (e == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, e);
            }
        } while (!ok);
        switch (e) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                doD();
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                doD();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            e = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (e == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, e);
            }
        } while (!ok);
        switch (e) {
            case 1: // Второе действие
                doD();
                break;
            case 2: // Второе действие
                doD();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}


///////////////

var family = {
    name: "Ivan",
    lastName: "Ivanov",
    age: 35
};