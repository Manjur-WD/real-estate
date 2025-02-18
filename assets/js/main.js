// HEADER STICKY BACKGROUND
const header = document.getElementById("header");
document.onscroll = function(){
    if(window.scrollY > header.offsetHeight){
        header.classList.add("animate__animated");
        header.classList.add("animate__slideInDown");
        header.classList.add("active");
    }
    else{
        header.classList.remove("animate__animated");
        header.classList.remove("animate__slideInDown"); 
        header.classList.remove("active"); 
    }
}