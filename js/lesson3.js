// Задание 1
var number = 0;
while (number <= 100) {
   if ((number / number == 1) && (number / 1 == number)){
        document.write("<h2>Number is " + number + "</h2> ");
        number ++; 
    }else{
        
        document.write("Число не является простым!");
        number ++;
   }
}
// Задание 2, 3 
var countBasketPrice = 0;
var countOfGoods = 0;
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
    }
    console.log(countOfGoods);
    console.log(countBasketPrice);
}
calculateSumCart();
// Задание 4
for(var i = 0; i > 9; i++){
}
console.log(i); // 0 условие не выполняется, до i++ не доходит код. 
                // Выходит из цикла, печатает 0

// Задание 5
var row = 20;
var drowX = "x";
function printX(){
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j <= i; j++) {
          arr.push(j);
          console.log(j);
        }
        console.log("\n");
      }
}