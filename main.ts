#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] =[]
let condition = true
while(condition){
    let answer = await inquirer.prompt(
        [
            {
                name: "select",
                type: "list",
                message: "Select An Option",
                choices:["Add","Update","view","delete","exit"]
            }
       ]
    );

    if (answer.select === "Add" ){
    let addTodo = await inquirer.prompt(
        [
            {
name: "todo",
type: "input",
message:"Add Items In The List",
validate:function(input){
    if(input.trim() == ""){
        return "Please Enter A Non Empty Item."
    }
    return true;
}
         }
        ]
    )
    if(addTodo.todo.trim() !== ""){
    todos.push(addTodo.todo);
    todos.forEach(todo => console.log(todo)
    )
}
}
if(answer.select === "Update"){
    let updateTodo = await inquirer.prompt(
            {
name:"todo",
type:"list",
message: "Update Items In The List",
choices: todos.map(item => item)
            }
    )
let addTodo =await inquirer.prompt(
        {
name:"todo",
type:"input",
message:"Add Items In The List",
        }
)
let newTodo =todos.filter(val =>val !== updateTodo.todo);
todos = [...newTodo,addTodo.todo]
todos.forEach(todo => console.log(todo)
 )
}

if(answer.select === "view"){
console.log("*****To Do List *****");
todos.forEach(todo => console.log(todo)
)
}

if(answer.select === "delete"){
let deleteTodo = await inquirer.prompt(
    [
        {
            name: "todo",
            type: "list",
            message:"Select Item To Delete",
            choices: todos.map(item => item)
        }
    ]
)
let newTodo = todos.filter(val => val !== deleteTodo.todo);
todos = [...newTodo];
todos.forEach(todo => console.log(todo)
)
}

if(answer.select === 'exit'){
    console.log("You Have Exit");
    condition =false;
}

}