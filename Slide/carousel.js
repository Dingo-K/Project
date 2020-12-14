let slideIndex = 1;
showSlides(slideIndex);

function addSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('carousel-item');

    if (n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex=slides.length
    }
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
var xml="<?xml version = '1.0'?>"+
"<head>Слайдер</head>"
parser = new DOMParser();
xmlDoc = parser.parseFromString(xml,"text/xml");
var names =xmlDoc.getElementsByTagName("head");
var title = document.getElementsByTagName("title");
title[0].innerHTML=names[0].innerHTML;