window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYoffset >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}
