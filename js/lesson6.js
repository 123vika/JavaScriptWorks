
// Домашнее задание № 6
//target 1
var smallImg = document.querySelectorAll(".smallImages img");
var bigImg = document.querySelectorAll(".bigImages img");

function cleanBigPic() {
    for (var im = 0; im < bigImg.length; im++) {
        bigImg[im].style.display = "none";
    }
}

for (var i = 0; i < smallImg.length; i++) {
    smallImg[i].style.width = "300px";
    smallImg[i].style.height = "300px";
    smallImg[i].onclick = function () {
        cleanBigPic();
        if (bigImg[this.id] != null){
            bigImg[this.id].style.display = "flex";
        }else{
            bigImg[this.id](alert("You doesent have big picture for img " + ((parseInt(this.id)) + 1)));
        }  
    };
}
cleanBigPic();

//target 2
// var images = ["img/small/p1.jpg", "img/small/p2.jpg", "img/small/p3.jpg"];
// var pic = 0;
// function next() {
//     var slide = document.getElementById("1");
//     pic++;
//     if (pic >= images.length){
//         pic = 0;
//     }
//     slide.src = images[pic];
// }
// function prev(){
//     var slide = document.getElementById("1");
//     pic--;
//     if (pic < 0){
//         pic = images.length - 1;
//     }
//     slide.src = images[pic];
// }