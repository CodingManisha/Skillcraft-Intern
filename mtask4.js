let tasks=[];


function save(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}



function load(){

tasks=
JSON.parse(localStorage.getItem("tasks"))||[];

display();

}

load();



function addTask(){

let text=
document.getElementById("task").value;

let priority=
document.getElementById("priority").value;


if(text=="")return;


tasks.push({

text,
priority,
done:false

});


document.getElementById("task").value="";

save();
display();

}



function display(data=tasks){

let list=document.getElementById("list");

list.innerHTML="";


data.forEach((t,i)=>{


let li=document.createElement("li");


li.className=t.priority.toLowerCase();


li.innerHTML=

`
<span onclick="complete(${i})"
class="${t.done?'done':''}">
${t.text}
</span>

<button onclick="removeTask(${i})">
✖
</button>
`;

list.appendChild(li);


});


update();

}



function complete(i){

tasks[i].done=
!tasks[i].done;

save();
display();

}



function removeTask(i){

tasks.splice(i,1);

save();
display();

}



function update(){

let total=tasks.length;

let done=
tasks.filter(x=>x.done).length;


document.getElementById("total").innerHTML=total;

document.getElementById("complete").innerHTML=done;


let percent=
total?
Math.round(done/total*100):0;


document.getElementById("progress")
.innerHTML=percent+"%";


document.querySelector(".circle")
.style.background=
`conic-gradient(#8b5cf6 ${percent*3.6}deg,#333 0deg)`;


document.getElementById("status")
.innerHTML=
`${done} of ${total} tasks completed`;

}



function filter(type){

if(type=="all")
display();

else
display(
tasks.filter(x=>x.priority==type)
);

}



function searchTask(){

let value=
document.getElementById("search")
.value.toLowerCase();


display(
tasks.filter(x=>
x.text.toLowerCase()
.includes(value)
)

);

}



function dark(){

document.body.classList.toggle("light");

}