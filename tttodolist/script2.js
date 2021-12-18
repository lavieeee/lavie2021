


let todoItems = [
    {
        title: "write1",
        isFinished: false,
        isImportance: false,
    },
    {
        title: "write2",
        isFinished: false,
        isImportance: false,
    }
];

function renderTodoItemList(todoItems) {

    let paneE1 = document.querySelector("#todolist > .list-pane");


    for (let item of todoItems){
        let itemDiv = document.createElement("div");
        itemDiv.className = "todo-item"

        let inputE1 = document.createElement("input");
        inputE1.type = "checkbox";

        let titleE1 = document.createElement("div");
        titleE1.className = "title";

        let importanceE1 = document.createElement("div");
        importanceE1.className = "important-flag";
        importanceE1.innerText = "!";

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";

        itemDiv.append(inputE1);
        itemDiv.append(titleE1);
        itemDiv.append(importanceE1);
        itemDiv.append(deleteBtn)
        
        titleE1.innerText = item.title;

        paneE1.append(itemDiv);
    }

}



function renderInputPane(todoItems){
    let todoListE1 = document.getElementById("todolist");

    let addBtnE1 = todoListE1.querySelector("#add-btn");

    addBtnE1.addEventListener("click",(e)=>{
        console.log("add a item");
    });

    // let btnE1 = document.querySelector("#todolist #add-btn");

}

renderTodoItemList(todoItems);
renderInputPane(todoItems);