window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
let a=1;
ico=document.getElementById('icon');
ico.addEventListener('click',function(){
    if(a==1){
        console.log("adding class");
        let mob=document.getElementsByClassName('mobile-nav');
        mob[0].classList.add("clk");
        return a=0;
    }
    else{
        console.log("Deleteing class");
        let mob=document.getElementsByClassName('mobile-nav');
        mob[0].classList.remove("clk");
        return a=1;
    }
});
