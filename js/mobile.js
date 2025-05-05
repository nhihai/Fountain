document.addEventListener("DOMContentLoaded", function(){
    let top = document.getElementById("top");

    top.addEventListener("click", function(){
        document.documentElement.scrollTop = 0;
    })
});