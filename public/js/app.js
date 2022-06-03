//var isCommaPressed = false;
// check comma ?
var display = "";
var oldDisplay ="";
function isNum(val){
    return !isNaN(val);
  }

function onClickBtn(event){
    var displayNode = document.querySelector(".display");
    var currentValue = event.target.innerText;

    var re = /\s*(\*|\/|\-|\+|\%)\s*/;

    if(currentValue=="C"){
        displayNode.value = "";
        display="";
        oldDisplay="";
    }else if(currentValue!="="){      
        display = display + event.target.innerText;
        var parts = display.split(re);
        var lastele = parts.slice(-1);
        if(isNum(lastele)){
            displayNode.value = display;
        }else{
            // si il y'a des erreurs
            displayNode.value = oldDisplay;
            display = oldDisplay;
        }
        oldDisplay = display;
    }
}

// document.getElementsByTagName DOM
var btns = document.querySelectorAll("button");

for( let ele of btns ){
    ele.addEventListener('click',onClickBtn);
}


