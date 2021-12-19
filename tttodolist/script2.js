


let todoItems = [];

let finishedItems = [];

function renderTodoItemList(todoItems,finishedItems) {

    let paneE1 = document.querySelector("#todolist > .list-pane");
    paneE1.innerHTML = "";

//    for (let i=0; i < paneE1.childNodes.length; i++){
//        paneE1.childNodes[i].remove;
//    }


    for (let i=0; i < todoItems.length ; i++ ){
        let item = todoItems[i];
        let itemDiv = document.createElement("div");
        itemDiv.className = "todo-item"

        let inputE1 = document.createElement("input");
        inputE1.type = "checkbox";

        inputE1.addEventListener("change", (e) => {
            
            finishedItems.push(item);
            todoItems.splice(i,1);
            console.log("finshed:", i,todoItems,finishedItems);
            renderTodoItemList(todoItems,finishedItems);
            alert("congratulations!")


        });

        let titleE1 = document.createElement("div");
        titleE1.className = "title";

        let importanceE1 = document.createElement("div");
        importanceE1.className = "important-flag";
        importanceE1.innerText = "!";

        if(item.isImportance){
            importanceE1.classList.add("open");
        }

        importanceE1.addEventListener("click", (e) =>{
            console.log("click:",item);
            if (item.isImportance){
                item.isImportance = false;
            } else{
                item.isImportance = true;
            }

            renderTodoItemList(todoItems,finishedItems);
        })


        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.addEventListener("click", (e) => {
            if  (confirm("delete?")){
                todoItems.splice(i,1);
                renderTodoItemList(todoItems,finishedItems);
            }
            console.log("click",item);

        })


        titleE1.innerText = item.title;

        itemDiv.append(inputE1);
        itemDiv.append(titleE1);
        itemDiv.append(importanceE1);
        itemDiv.append(deleteBtn)


        paneE1.append(itemDiv);
    }

}

function renderFinishedItemList(todoItems,finishedItems) {

    let paneE1 = document.querySelector("#todolist > .list-pane");
    paneE1.innerHTML = "";

//    for (let i=0; i < paneE1.childNodes.length; i++){
//        paneE1.childNodes[i].remove;
//    }


    for (let i=0; i < finishedItems.length ; i++ ){
        let item = finishedItems[i];
        let itemDiv = document.createElement("div");
        itemDiv.className = "todo-item"


        let titleE1 = document.createElement("div");
        titleE1.className = "title";

        let importanceE1 = document.createElement("div");
        importanceE1.className = "important-flag";
        importanceE1.innerText = "!";
        if(item.isImportance){
            importanceE1.classList.add("open")
        }
        


        titleE1.innerText = item.title;

        itemDiv.append(titleE1);
        itemDiv.append(importanceE1);

        paneE1.append(itemDiv);
    }

}

function renderInputPane(todoItems,finishedItems){
    let inputPaneE1 = document.querySelector("#todolist > .input-pane");

    let addBtnE1 = inputPaneE1.querySelector("#add-btn");
    let hisBtnE1 = inputPaneE1.querySelector("#his-btn");


    addBtnE1.addEventListener("click",(e)=>{
        let inputE1 = inputPaneE1.querySelector("input");

        todoItems.push({
            title: inputE1.value,
            isFinished: false,
            isImportance: false,
        })
        
        console.log("add a item :",inputE1.value);
        //console.log(todoItems);
        renderTodoItemList(todoItems,finishedItems);
    });

    hisBtnE1.addEventListener("click",(e)=>{
        if (hisBtnE1.classList.contains("open")){
            hisBtnE1.classList.remove("open");
            renderTodoItemList(todoItems,finishedItems);
        }else{
            hisBtnE1.classList.add("open");
            renderFinishedItemList(todoItems,finishedItems);
        }
    });

    // let btnE1 = document.querySelector("#todolist #add-btn");

}





renderTodoItemList(todoItems,finishedItems);
renderInputPane(todoItems,finishedItems);