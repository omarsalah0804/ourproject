//let trueAndFalse= JSON.parse(localStorage.getItem(""));//you have to fill this var with array true or false 
let username = JSON.parse(localStorage.getItem("userName")) ;       //you have to fill this var with first name of user ,, //
// firstDivPassOrFail ()  
// console.log(username);
let topiic = JSON.parse(localStorage.getItem("Position")) ;    
// console.log(topiic);                     //you have to fill this var with the name of //////topic ////as it shows in home page
let Quseti = 0 ;                          
//you have to fill this var with array for user answers 
let trueAndFalse=[];
let coluum=[];
if(topiic=="HTML"){
    trueAndFalse = JSON.parse(localStorage.getItem("isAnswerToFHtml"));
    coluum =  JSON.parse(localStorage.getItem("userAnswerHtml"));
}else if(topiic=="CSS"){
    trueAndFalse = JSON.parse(localStorage.getItem("isAnswerToFCss"));
    coluum =  JSON.parse(localStorage.getItem("userAnswerCss"));
}
else{
    trueAndFalse = JSON.parse(localStorage.getItem("isAnswerToFJs"));
    coluum =  JSON.parse(localStorage.getItem("userAnswerJs"));
}


// console.log(username);
// console.log(correctAnswer);
// console.log(topiic);

let htmlQuestions = [
{
    "Que": "What does HTML stand for?" ,
    "theCa" : `Hyper Text Markup Language`
} ,
{
    "Que" : "Which of the following tags doesn't require a closing tag?" ,
    "theCa" : `both A & B`
} ,
{
    "Que" : "Which attribute is used to provide a unique name to an HTML element?" ,
    "theCa" : `id`
} ,
{
    "Que": "HTML files are saved by default with the extension?" ,
    "theCa" : `html`
} ,
{
    "Que" : "Which of the following is the correct syntax for using the HTML style attribute?" ,
    "theCa" : `&lt;tagname style="property:value;"&gt;`
} ,
{
    "Que" : "Apart from <i> tag, which of the following tag is used to render a text in italics?" ,
    "theCa" : `&lt;em&gt;`
} ,
    {
    "Que": "What is the correct syntax to write an HTML comment?" ,
    "theCa" : `&lt;!--Comment--&gt;`
} ,
{
    "Que" : "Colors are defined in HTML using?" ,
    "theCa" : `All of the above`
} ,
{
    "Que" : "Which of the following are examples of block-level elements in HTML?" ,
    "theCa" : `&lt;h1&gt;`
} ,
{
    "Que" : "Which of the following things are necessary to create an HTML page?" ,
    "theCa" : `Both A and B`
} ,
]






let cssQuestions = [
{
    "Que": "The full form of CSS is:" ,
    "theCa" : `Cascading Style Sheets`
} ,
{
    "Que" : "In how many ways can CSS be written in?" ,
    "theCa" : `3`
} ,
{
    "Que" : "What type of CSS is generally recommended for designing large web pages?" ,
    "theCa" : `External`
} ,
{
    "Que": "How can we select an element with a specific Class in CSS?" ,
    "theCa" : `.`
} ,
{
    "Que" : "How can we write comments in CSS?" ,
    "theCa" : `./*Comment*/`
} ,
{
    "Que" : "What does the inherit value for a property do?" ,
    "theCa" : `Inherits the value of the parent element`
} ,
    {
    "Que": "Which of the following are parts of the CSS box model?" ,
    "theCa" : `Border`
} ,
{
    "Que" : "Which of the following CSS property specifies the type of list item marker?" ,
    "theCa" : `list-style-type`
} ,
{
    "Que" : "Which of the following properties is used to alignment text in CSS?" ,
    "theCa" : `text-align`
} ,
{
    "Que" : "In the below code snippet, in what order will the margins be added?" ,
    "theCa" : `Top, Right, Bottom, Left`
} ,
]




let jsQuestions = [
{
    "Que": "Javascript is an _______ language?" ,
    "theCa" : `Object-Oriented`
} ,
{
    "Que" : "Which of the following keywords is used to define a variable in ES6?" ,
    "theCa" : `let`
} ,
{
    "Que" : "Which of the following methods can be used to display data in some form using Javascript?" ,
    "theCa" : `All of the above`
} ,
{
    "Que": `What will be the output of the following code snippet? &lt;script&gt; a = 5 + "9"; document.write(a); &lt;/script&gt;` ,
    "theCa" : `59`
    
} ,
{
    "Que" : `What will be the output of the following code snippet? &lt;script&gt;  var a = "Scaler"; var result = a.substring(2, 4); document.write(result); &lt;/script&gt;` ,
    "theCa" : `al`
} ,
{
    "Que" : "When the switch statement matches the expression with the given labels, how is the comparison done?" ,
    "theCa" : `Both the datatype and the result of the expression are compared`
} ,
    {
    "Que": "Which function is used to convert an object into a JSON string in Javascript?" ,
    "theCa" : `stringify()`
} ,
{
    "Que" : "How to stop an interval timer in Javascript?" ,
    "theCa" : `clearInterval`
} ,
{
    "Que" : "How can a datatype be declared to be a constant type?" ,
    "theCa" : `const`
} ,
{
    "Que" : "Which of the following methods is used to access HTML elements using Javascript?" ,
    "theCa" : `getElementByClassName`
} ,
]


function countTrueValues(trueAndFalse) {                      //this is function to count number of correctAnswer
    let count = 0;
    for (let i = 0; i < 10 ; i++) {
      if (trueAndFalse[i] === true) {
        count++;
      }
    }
    return count;
  }
  let correctAnswer = countTrueValues(trueAndFalse);
  wrongAnswers = 10 - correctAnswer      




    if (topiic == "HTML") {
         Quseti=htmlQuestions;
    }
   else if (topiic == "CSS") {
         Quseti=cssQuestions;
    }
    else  {
         Quseti=jsQuestions;
    }




function firstDivPassOrFail () {
    if (correctAnswer >= 5) {
        document.getElementById("passorfail").innerHTML=` Well Done ${username} , You Have Successfully Passed `;
    
    }
    else {
        document.getElementById("passorfail").innerHTML=` Ooh ${username} , You Failed ` ;
        document.body.style.color = '#FC2947' ;
        document.getElementById("outbutton").style.color = '#FC2947' ;
        document.getElementById("showanswersbutton").style.color = '#FC2947' ;
        document.getElementById("logoo").src='./images/loogofail.jpeg' ;
        document.getElementById("pic2").src = './images/picfail-removebg-preview11.png'
    }
}
firstDivPassOrFail ();


function secondDivTheGrade (){
        document.getElementById("gradepercent").innerHTML=`You have answered ${correctAnswer} Correct answers and ${wrongAnswers} wrong answers , Your grade is ${correctAnswer*10} / 100 `
}
secondDivTheGrade ()


let btn=document.getElementById("showanswersbutton");
btn.addEventListener("click",function(){
    btn.style.display="none";
    let html="<table class=\"tablee\"  border=2px>";
    html+="<tr>";
    html+="<th class='thh'>"+"questions"+"</th>";
    html+="<th class='thh'>"+"correct answers"+"</th>";
    html+="<th class='thh'>"+"your answer"+"</th>";         

    for (let index = 0; index < Quseti.length; index++) {
        html+="<tr>";
        html+="<td class='AnswersTable'>"+Quseti[index].Que+"</td>";
        html+="<td class='AnswersTable'>"+Quseti[index].theCa+"</td>";
        if(trueAndFalse[index] == false){

            html+="<td class=\"red-color\">"+coluum[index]+"</td>";  
        }
        else{
            html+="<td class=\"green-color\">"+coluum[index]+"</td>"; 
        }
        html+="</tr>";
        
    }
    html+="</table>";
    document.getElementById("answer-table").innerHTML=html;
})

let logBtn=document.getElementById("outbutton");
logBtn.addEventListener("click",function(){
    window.location.href="./index.html";
})
