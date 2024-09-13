const input = document.querySelector("input");
const list = document.querySelector("#list-container");
const btn = document.querySelector("button");

function add(){
    if(input.value === ""){
        alert("Enter Text")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}
btn.addEventListener("click", add);
document.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        add();
    }
})

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();