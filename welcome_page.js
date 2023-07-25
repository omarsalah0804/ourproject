let user=JSON.parse(localStorage.getItem("userName"));
let position=JSON.parse(localStorage.getItem("Position"));
document.getElementById("h1").innerHTML=user;
document.getElementById("h5").innerHTML="Ready For " + position + " Quiz ?!";
let startBtn=document.getElementById("btnStart");
startBtn.addEventListener("click", function(){
    if(position=="HTML"){
        window.location.href="./html_quiz.html";
    }
    else if(position=="CSS"){
        window.location.href="./css_quiz.html";
    }else{
        window.location.href="./Js_quiz.html";
    }
})