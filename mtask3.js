const boxes=document.querySelectorAll(".board div");

let turn="X";

let active=true;

let scoreX=0;
let scoreO=0;


const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];


boxes.forEach(box=>{


box.onclick=()=>{


if(box.innerHTML=="" && active){


box.innerHTML=turn;


document.getElementById("click").play();


check();


turn=turn=="X"?"O":"X";


document.getElementById("turn")
.innerHTML=
"Player "+turn+" Turn";


}

}

});





function check(){


for(let pattern of winPatterns){


let a=boxes[pattern[0]].innerHTML;

let b=boxes[pattern[1]].innerHTML;

let c=boxes[pattern[2]].innerHTML;



if(a && a==b && b==c){


pattern.forEach(i=>

boxes[i].classList.add("win")

);



let winner=a;


if(winner=="X"){

scoreX++;

}else{

scoreO++;

}



updateScore();


document.getElementById("turn")
.innerHTML=
"🏆 Player "+winner+" Wins";


active=false;

return;

}


}



if([...boxes].every(x=>x.innerHTML!="")){


document.getElementById("turn")
.innerHTML="🤝 Draw";


active=false;

}


}



function restart(){

boxes.forEach(x=>{

x.innerHTML="";
x.classList.remove("win");

});


turn="X";

active=true;


document.getElementById("turn")
.innerHTML="Player X Turn";

}




function updateScore(){

document.getElementById("scoreX")
.innerHTML=scoreX;


document.getElementById("scoreO")
.innerHTML=scoreO;


}



function clearScore(){

scoreX=0;

scoreO=0;

updateScore();

restart();

}