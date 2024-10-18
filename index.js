const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask (){
    if (inputBox.value === ''){
        alert("Input a task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        let editButton = document.createElement("button") //line starts here edit button
        editButton.innerHTML = "Edit" //here too
        editButton.className = "edit-button" //here also
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        li.appendChild(editButton) //here too
        listContainer.appendChild(li) //here
        editButton.addEventListener("click", function () { //here
            editTask(li) //here
        })
        span.addEventListener("click", function() { //ddd
            li.remove() // Remove task
            saveData() //ddddd
        })
    }
    inputBox.value = ""
    inputBox.focus() //ffff
    saveData()
}
















listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()