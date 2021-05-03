window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
let a = 1;
ico = document.getElementById('icon');
ico.addEventListener('click', function () {
    if (a == 1) {
        disablescroll();
        console.log("Open");
        let mob = document.getElementsByClassName('mobile-nav');
        mob[0].classList.add("clk");
        var l= document.getElementsByClassName("logo");
        l[0].classList.add("cl");
        return a = 0;
    }
    else {
        enablescroll();
        console.log("Close");
        let mob = document.getElementsByClassName('mobile-nav');
        mob[0].classList.remove("clk");
        var l= document.getElementsByClassName("logo");
        l[0].classList.remove("cl");
        return a = 1;
    }
});
function disablescroll() {
    scrollTop = document.documentElement.scrollTop;
    scrollLeft = document.documentElement.scrollLeft;
    window.onscroll = function () {
        window.scrollTo(scrollTop, scrollLeft);
    };
};
function enablescroll() {
    window.onscroll = function () { };
};
