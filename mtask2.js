let min=0;
let sec=0;
let ms=0;

let timer=null;


function start(){

if(timer!==null)
return;


timer=setInterval(()=>{

ms++;

if(ms==100){

ms=0;
sec++;

}


if(sec==60){

sec=0;
min++;

}


display();


},10);

}




function pause(){

clearInterval(timer);

timer=null;

}




function reset(){

clearInterval(timer);

timer=null;


min=0;
sec=0;
ms=0;


display();


document.getElementById("laps").innerHTML="";

}



function display(){

document.getElementById("min").innerHTML=
String(min).padStart(2,'0');


document.getElementById("sec").innerHTML=
String(sec).padStart(2,'0');


document.getElementById("ms").innerHTML=
String(ms).padStart(2,'0');

}