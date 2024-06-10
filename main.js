btn0.onclick = function(){
    display.value+='0';
}

btn1.onclick = function(){
    display.value+='1';
}
btn2.onclick = function(){
    display.value+='2';
}
btn3.onclick = function(){
    display.value+='3';
}
btn4.onclick = function(){
    display.value+='4';
}
btn5.onclick = function(){
    display.value+='5';
}
btn6.onclick = function(){
    display.value+='6';
}
btn7.onclick = function(){
    display.value+='7';
}
btn8.onclick = function(){
    display.value+='8';
}
btn9.onclick = function(){
    display.value+='9';
}
add.onclick = function(){
    display.value+='+';
}

diff.onclick = function(){
    display.value+='-';
}
mul.onclick = function(){
    display.value+='*';
}
dot.onclick = function(){
    display.value+='.';
}


equ.onclick = function(){
    display.value = eval(display.value).toFixed(1);
}

ac.onclick = function(){
    display.value = '';
}

plmn.onclick = function(){
    display.value= display.value*(-1);
}

div.onclick = function(){
    display.value+='/';
}

percent.onclick = function(){
    display.value = display.value/100;
}

let isOpen = false;
menu.onclick = function () {
    if (isOpen == false) {
        calcContainer2.style.display='flex';
        isOpen = true;
    } else {
        calcContainer2.style.display='none';
        isOpen = false;
    }
}

left.onclick = function(){
    display.value+='(';
}
right.onclick = function(){
    display.value+=')';
}
pi.onclick = function(){
    display.value+='3.141592';
}



square.onclick = function(){
    display.value = display.value*display.value;
}
cube.onclick = function(){
    display.value = display.value*display.value*display.value;
}
e.onclick = function(){
    display.value+='2.718281';
}
corin.onclick = function(){
    display.value = Math.sqrt(display.value);
}

