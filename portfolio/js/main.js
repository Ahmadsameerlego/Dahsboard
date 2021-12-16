// // toggle menu
let togglebtn = document.querySelector(".toggle-menu");

let menubar = document.querySelector(".header .navbar");

togglebtn.onclick = function(){
    menubar.classList.toggle("open");
    // this.classList.add("hidden");
}
// let swip = document.getElementById("swiper-wrapper-8e764c362bb29fd7");
// swip.style.transform = "none";

let img =document.querySelector(".ourNews .swiper-slide img ");

img.onclick = function(){
    this.classList.add("active");
}

let pBtn = document.querySelector(".ourNews .swiper-slide img");

pBtn.onclick = function(){
    document.querySelector(".ourNews p").style.display = "block";
}

let video = document.querySelector(".trainer .fas");
video.onclick = function(){
    this.style.display = "none";
    document.querySelector(".trainer video").style.filter = "none"
}