document.getElementById("expression").focus();

var btns = document.querySelectorAll("#controls button");
console.log(btns);


// setting the 
btns.forEach((key,i) => {
    if(key.getAttribute("id") === "ac"){
        key.addEventListener("click",(e) => {
            document.getElementById("expression").value = "";
            document.getElementById("result").innerHTML = "";
        });
    }

    if(key.getAttribute("id") === "one"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "1";});
    }

    if(key.getAttribute("id") === "two"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "2";});
    }

    if(key.getAttribute("id") === "three"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "3";});
    }

    if(key.getAttribute("id") === "four"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "4";});
    }

    if(key.getAttribute("id") === "five"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "5";});
    }

    if(key.getAttribute("id") === "six"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "6";});
    }

    if(key.getAttribute("id") === "seven"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "7";});
    }

    if(key.getAttribute("id") === "eight"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "8";});
    }

    if(key.getAttribute("id") === "nine"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "9";});
    }

    if(key.getAttribute("id") === "zero"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "0";});
    }

    if(key.getAttribute("id") === "add"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "+";});
    }

    if(key.getAttribute("id") === "sub"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "-";});
    }

    if(key.getAttribute("id") === "mul"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "x";});
    }

    if(key.getAttribute("id") === "div"){
        key.addEventListener("click",(e) => {document.getElementById("expression").value += "/";});
    }
});



// Evaluate the expression on click event for equals key using eval(expression) 
// inbuilt function
document.getElementById("equals").addEventListener("click",e=>{
    var exp = document.getElementById("expression").value;
    document.getElementById("result").innerHTML = eval(exp).toString();
});



// trigger click event for "equals key" manually on enter keypress click event
// also, trigger all clear key on keypress of "c" character on keyboard
document.addEventListener("keypress",e=>{
    console.log(event.keyCode);
    
    if(event.keyCode == 13){
        event.preventDefault();
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click");
        document.getElementById("equals").dispatchEvent(evt);
    }

    if(event.keyCode == 99){
        event.preventDefault();
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click");
        document.getElementById("ac").dispatchEvent(evt);
    }
})