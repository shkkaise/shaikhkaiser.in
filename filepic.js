// ************ Below script for Ramdom Pic Generator  ************

var randomNumber = Math.floor(Math.random() * 10) + 1;
var randomImage = "KAIS00" + randomNumber + ".JPG";
var imgSrc = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSrc);

// ************ Above script for Ramdom Pic Generator  ************

// ************ Below script for Flashing PDF and Cert Icons  ************
// var randomIdnumber = Math.floor(Math.random() * 15) + 1;
// var randomImageid = "blinking_image" + randomNumber;
// var imgSrc = "images/" + randomImage;
// var imgid =
// document.querySelectorAll("img")[
// (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
// ];
//
// var img = document.getElementById("blinking_image");
// var interval = window.setInterval(function () {
// if (img.style.visibility == "hidden") {
// img.style.visibility = "visible";
// } else {
// img.style.visibility = "hidden";
// }
// }, 1000);
// console.log(imgid);

// ************ Above script for Flashing PDF and Cert Icons  ************
