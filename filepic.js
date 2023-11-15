var randomNumber = Math.floor(Math.random() * 10) + 1;
var randomImage = "KAIS00" + randomNumber + ".webp";
var imgSrc = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSrc);
