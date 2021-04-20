// Задание 1

//  my version
// var number = 0;
// while (number <= 100) {
//    if ((number / number == 1) && (number / 1 == number)){
//         document.write("<h2>Number is " + number + "</h2> ");
//         number ++; 
//     }else{
        
//         document.write("Число не является простым!");
//         number ++;
//    }
// }

// true version
var x = 2;
function isPrime(num){
    var i = 2;
    while(i < num / 2){
        if(num % i == 0){
            return false;
        }
        i++;
    }
    return true;
}
while(x <= 100){
    if(isPrime(x) == true){
        console.log(x);
    }
    x++;
    
}

// Задание 2, 3 
var countBasketPrice = 0;
var countOfGoods = 0;
var total = 0;
var cart = [
    {
        title: "T-Shirt",
        price: 100,
        count: 3
    },
    {
        title: "T-Shirt",
        price: 200,
        count: 1
    },
    {
        title: "T-Shirt",
        price: 300,
        count: 2
    },
    {
        title: "T-Shirt",
        price: 400,
        count: 1
    }
];

function calculateSumCart(){
    for (var i of cart){
        countOfGoods += i.count;
        countBasketPrice += i.price;
        total = (countOfGoods * countBasketPrice);
    }
    console.log(countOfGoods);
    console.log(countBasketPrice);
    console.log(total);
}
calculateSumCart();
// Задание 4
for(var i = 0; i > 9; i++){
}
console.log(i); // 0 условие не выполняется, до i++ не доходит код. 
                // Выходит из цикла, печатает 0
