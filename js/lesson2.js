// Задание 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2   сначала прибавляется 1 к а, затем 2 присваивается к с.
// d = b++; alert(d);           // 1   сначала присваивается d = b (= 1) , затем прибавляется 1.
// c = (2+ (++a)); alert(c);      // 5   к 2  прибавляется 1(++) потом а(а=2).  2 + 1 + 2 = 5
// d = (2+ b++); alert(d);      // 4   2 + b (b=2) = 4 
// alert(a);                    // 3   1 строчка а = 1 , на второй а = 2, на четвёртой  а = 3
// alert(b);                    // 3   1 строчка b = 1, на третьей к b добавляем 1, на пятой
                             //     к  b   добавляем 1
// Задание 2
// var a = 2;
// var x = 1 + (a *= 2);         //  1 +  (2 * 2) = 5  
// console.log(x);

// Задание 3
// var a = -5,
//     b = 0;
// if((a > 0) && (b > 0)){
//     console.log (a - b);
// }else if ((a < 0) && (b < 0)){
//     console.log (a * b);
// }else if (((a < 0) && (b >= 0)) || 
//       ( (a >= 0) && (b < 0))) {
//         console.log (a + b);
// }

// Задание 4
// var a = +prompt("Введите число от 0 до 15");
var a = 0;
// alert(a);
switch (a) {
    case 0:
        console.log(0);
   //     break;
    case 1:
        console.log(1);
   //     break;
    case 2:
        console.log(2);
    //    break;
    case 3:
        console.log(3);
    //    break;
    case 4:
        console.log(4);
    //    break;
    case 5:
        console.log(5);
    //    break;
    case 6:
        console.log(6);
    //    break;
    case 7:
        console.log(7);
    //    break;
    case 8:
        console.log(8);
    //    break;
    case 9:
        console.log(9);
    //    break;
    case 10:
        console.log(10);
    //    break;
    case 11:
        console.log(11);
     //   break;
    case 12:
        console.log(12);
     //   break;
    case 13:
        console.log(13);
      //  break;
    case 14:
        console.log(14);
    //    break;
    case 15:
        console.log(15);
        break;                    
    default:
        console.log("Ввели некорректное число!");
        break;
}

// Задание 4*
//берёт число которое ввели и выводит от него до 15 
// var a = +prompt("Введите число от 0 до 15");
// function enterNum (a){
//     console.log(a);
//     if(a >= 15){
//         return;
//     }
//     return enterNum(a + 1);
// }
// enterNum(a);

// Задание 5

// function add (a, b){
//     return a + b;
// }
// function minus (a, b){
//     return a - b;
// }
// function multi (a, b){
//     return a * b;
// }
// function devide (a, b){
//     return a / b;
// }
// console.log(add(5, 3));
// console.log(minus(8, 5));
// console.log(multi(2, 2));
// console.log(devide(10, 2));

// Задание 6
// function mathOperation(arg1, arg2, operation){
//     switch (operation){
//         case "addNumbers":
//             console.log(add (arg1, arg2));
//             break;
//         case "minusNumbers":
//             console.log(minus (arg1, arg2));
//             break;
//         case "multiNumbers":
//             console.log(multi (arg1, arg2));
//             break;
//         case "devideNumbers":
//             console.log(devide (arg1, arg2));
//             break;
//         default:
//             console.log("Ввели некорректное значение!");
//             break;
//     }
// }

// var getArgument1 = +prompt("Введите первое число!");  
// var getArgument2 = +prompt("Введите второе число!");
// var getOperate = prompt("Введите одно из действий: addNumbers, minusNumbers, multiNumbers, devideNumbers");

// mathOperation(getArgument1, getArgument2, getOperate);

// Задание 7
// var compNull;
// var comp0 = 0;
// if(compNull === 0){
//     console.log("This is the same!");
// }
// console.log("These are different concepts!");
// null это когда объекту не присвоили никакого значения. Он создан, но значения у него нет
// 0 это число , которое присвоили какой либо переменной.