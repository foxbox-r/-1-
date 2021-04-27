var todoListWrapper = document.querySelector("#todoListWrapper");

var htmlCode = "";

function Todo(id,content,isSuccess=false,isUpdate=false){
    this.id = id;
    this.content = content;
    this.isSuccess = isSuccess;
    this.isUpdate = isUpdate;
}


var todos = [
    new Todo(1,"first is good.",false),
    new Todo(2,"second is nomal",true),
    new Todo(3,"third is bad.",false),
];

// registAndLoadTodos();

function successById(id){
    var todo = todos.find(v=>v.id == id);
    todo.isSuccess = !todo.isSuccess;
    registAndLoadTodos();
    changeCodeAndAppendCode();
}

function updateById(id){
    for(var i=0;i<todos.length;i++){
        var todo = todos[i];
        if(todo.id == id){
            todo.isUpdate = !todo.isUpdate;
            break;
        }
    }
    console.log(todos);
    registAndLoadTodos();
    changeCodeAndAppendCode();
}

function deleteById(id){
    // todos.splice(id,1);
    for(var i=0;i < todos.length;i++){
        var todo = todos[i];
        if(todo.id == id){
            todos.splice(i,1);
            registAndLoadTodos();
            changeCodeAndAppendCode();
        }
    }
}

function changeTodosToHtmlCode(){
    htmlCode = "";
    for(let i=0;i<todos.length;i++){
        const todo = todos[i];
        htmlCode += `
        <div id="todo_${todo.id}" class="todoBox ${todo.isSuccess?"true":"false"}">
            ${
                todo.isUpdate
                ?`<div class="update"><input value="${todo.content}" id="update_input_${todo.id}" type="text" /><button onclick="updateTodo(${todo.id})">update</button></div>`
                :`<p class="content">${todo.content}</p>`    
            }
            
            <div class="buttons">
                <span class="success btn" onclick="successById(${todo.id})"></span>
                <span class="update btn" onclick="{updateById(${todo.id})}"></span>
                <span class="delete btn" onclick="deleteById(${todo.id})"></span>
            </div>
        </div>
        `;
    }
}

function appendCode(){
    todoListWrapper.innerHTML = htmlCode;
}

function changeCodeAndAppendCode(){
    changeTodosToHtmlCode();
    appendCode();
}

function registTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadTodos(){
    todos = JSON.parse(localStorage.getItem("todos",JSON.stringify(todos)));
}

function registAndLoadTodos(){
    registTodos();
    loadTodos();
}

function onCreateClick(){
    var input = document.querySelector("#createInput");
    var content = input.value;
    var newTodo = new Todo(todos[todos.length-1].id+1,content,false);
    todos.push(newTodo);
    
    registAndLoadTodos();
    changeCodeAndAppendCode();
    input.value = "";
}

function onInitialize(){
    changeTodosToHtmlCode();
    appendCode();
}

function updateTodo(id){
    var todo = todos.find(v=>v.id === id);
    var updateInput = document.querySelector(`#update_input_${id}`);
    var updatedContent = updateInput.value;
    todo.content = updatedContent;
    todo.isUpdate = false;

    registAndLoadTodos();
    changeCodeAndAppendCode();
}


document.querySelector("#createBtn").addEventListener("click",()=>console.log("hi"));
window.addEventListener("load",(e)=>{
    loadTodos();
    console.log("initial loaded data => ",todos);
    onInitialize();
});