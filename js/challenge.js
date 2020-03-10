const counter = document.getElementById("counter");
const pause = document.getElementById("pause");
const minus_btn = document.getElementById("minus");
const plus_btn = document.getElementById("plus");
const heart_btn = document.getElementById("heart");
const submit_btn = document.getElementById("submit");
const comments = document.getElementById("list");

let c = 1;
let interval;

function start_timer(){
    counter.innerText++;
}

document.addEventListener("DOMContentLoaded",function() {
    interval = window.setInterval(start_timer, 1000);
})

function incrementCount(){
    let value = parseInt(counter.innerText,10);
    value++;
    counter.innerText = value;
}

function decrementCount(){
    let value = parseInt(counter.innerText,10);
    value--;
    counter.innerText = value;
}

function pauseResumeCounter(){
    if (interval){
        clearInterval(interval);
        interval = null;
        pause.innerText = "Resume";
        changeBtnStates(false);
    }
    else{
        interval = window.setInterval(start_timer, 1000);
        pause.innerText = "Pause";
        changeBtnStates(true);
    }
}

function changeBtnStates(value){
    if (value === true){
        minus_btn.disabled = false;
        plus_btn.disabled = false;
        heart_btn.disabled = false;
        submit_btn.disabled = false;
    }
    else{
        minus_btn.disabled = true;
        plus_btn.disabled = true;
        heart_btn.disabled = true;
        submit_btn.disabled = true;
    }
}

function appendLike(){
    let c = parseInt(counter.innerText,10);
    let ul = document.getElementsByClassName('likes')[0];

    if (isEmpty(ul)){ //if list is empty create a new list
        e = document.createElement('li');
        e.innerText = `${c} liked 1 time`;
        ul.append(e);
    }
    else{ 
        //iterate through the list and find if value already exists
        let updated = false;
        for (let i = 0; i < ul.childElementCount; i++){
            counterOnList = parseInt(ul.children[i].innerText.split(" ")[0],10);
            if (counterOnList === c){
                actualValue = parseInt(ul.children[i].innerText.split(" ")[2],10)
                ul.children[i].innerText = `${counterOnList} liked ${++actualValue} times.`
                updated = true;
            }  
        }
        if (updated === false){
            e = document.createElement('li');
            e.innerText = `${c} liked 1 time`;
            ul.append(e);
        }
    
    }    
}

function isEmpty(obj) {
    return obj.innerHTML.trim() == ""
  }

function submitComment(){
    let a = document.createElement("p");
    let textField = document.getElementById("comment-input").value;
    a.innerText = textField;
    comments.appendChild(a);
}
