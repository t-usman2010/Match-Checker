// console.log('Hello, world!');



//var a = 1;
//var b = 2;

//console.log(a + b);

//var arr = [1, 2, 3, 4, 5, 6, 7, 8]


//arr.push(9)
//arr.pop() 
//arr.shift()
//arr.unshift(0)
//arr.splice(2, 0, 10, 11)

//var index = arr.indexOf(8)
//var sliceData = arr.slice(6)

//console.log(arr);
//console.log(index)
//console.log(sliceData)`





//var num = (54.386)


//console.log(Math.round(num))


//var num = ("I loove you")
//var num2 = ("I do not love you")
//var randomRatio = Math.random() * 70
//if(randomRatio > 50.5){
//    console.log(num)} 
//else {
//    console.log(num2)}

var Pic = document.getElementById("Pic");
var Pic2 = document.getElementById("Pic2");
var Pic3 = document.getElementById("Pic3");
var Result = document.getElementById("Result");

//var images = ["Love & HAte 2.png", "LOve & haTE.jpeg"];
//var images2 = ["IMG_5163.JPG"];
var images2 = ["Boys.png"];
var images  = ["Girl.png"];
var images3 = ["https://png.pngtree.com/png-vector/20221113/ourmid/pngtree-broken-heart-art-free-vector-png-image_6445723.png"];
var images4 = ["https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-red-heart-icon-isolated-png-image_1726594.jpg"];


var userName = prompt("Enter Your Name");
var lovename = prompt("Enter Your Crush Name");


var randomRatio = Math.random() * 100;

if (randomRatio < 50) {
    Pic.src = images[0];
    Pic2.src = images2[0];
    Pic3.src = images4[0];
    Result.innerText = (userName + " and " + lovename + " are a perfect match!");
} else {
    Pic2.src = images2[0];
    Pic.src = images[0];
    Pic3.src = images3[0];
    Result.innerText = (userName + " and " + lovename + " are not perfect match!");
}