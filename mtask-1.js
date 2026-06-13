function start(){

alert("Welcome to StudentOS 🚀");

}



function add(){

let text=document.getElementById("task").value;


if(text=="")return;


let li=document.createElement("li");


li.innerHTML=text+" ✅";


li.onclick=()=>{

li.style.textDecoration="line-through";

}



document
.getElementById("list")
.appendChild(li);


document.getElementById("task").value="";


}