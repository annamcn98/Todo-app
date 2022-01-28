
//Ingen loop ska behövas för sysslorna att dyka upp i flertal
// TextField som tom string?






//When clicking Add-btn:
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function(e) {


let ulTaskList = document.getElementById('ul-task-list');


let liTaskList = document.createElement('li');
liTaskList.id = "li-task-list";

ulTaskList.append(liTaskList);



let inputCheckbox = document.createElement('input');
inputCheckbox.id = "input-checkbox";
inputCheckbox.setAttribute('type', 'checkbox')

liTaskList.append(inputCheckbox)


let inputTextTaskList = document.createElement('input');
inputTextTaskList.id = "input-text-task-list";

let textField = document.getElementById('text-field')
inputTextTaskList.value = textField.value; 
textField.value = "";
inputTextTaskList.disabled = true;

liTaskList.append(inputTextTaskList)


let changeBtn = document.createElement('button');
changeBtn.id = "change-btn";
changeBtn.innerHTML = `Change`;

liTaskList.append(changeBtn)

changeBtn.addEventListener('click', function(e) {
    let clickedBtn = e.target;

    if(clickedBtn.innerHTML == `Change`) {
        clickedBtn.innerHTML = `Save`;
        inputTextTaskList.disabled = false;
    } else {
        clickedBtn.innerHTML = `Change`;
        inputTextTaskList.disabled = true;
    }

})

let deleteBtn = document.createElement('button');
deleteBtn.id = "delete-btn";
deleteBtn.innerHTML =`Delete`;

liTaskList.append(deleteBtn)

deleteBtn.addEventListener('click', function(e) {
    let clickedBtn = e.target;
    clickedBtn.parentNode.remove();

})

let ulDoneList = document.getElementById('ul-done-list');

inputCheckbox.addEventListener('click', function(e) {

    // let liDoneList = liTaskList;
    
    let clickedBox = e.target;
    clickedBox.parentNode.remove();
    inputCheckbox.disabled = true;
    ulDoneList.append(liTaskList, inputCheckbox, inputTextTaskList, changeBtn, deleteBtn);
    
})
let resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', function(e) {
    let clickedBtn = e.target;
    // ulDoneList.parentNode.remove();
    liTaskList.parentNode.remove();
    clickedBtn.parentNode.innerHTML = `Your list is empty!`;
    
})

})




// OBS! textField.value //refererar till texten innanför textfältet (saknar sluttag)



//delete-btn and change-btn 

// let deleteBtn = document.getElementById('delete-btn');
// deleteBtn.addEventListener('click', function(e) {
//     let clickedBtn = e.target;
//     clickedBtn.parentNode.remove();
// })

// let addedTask = document.getElementById('added-field');
// let changeBtn = document.getElementById('change-btn');
// changeBtn.addEventListener('click', function(e) {
//     let clickedBtn = e.target;
//     clickedBtn.parentNode.remove();
// })
















// let newTask = document.getElementById("task-row");
// let finishedTasks = document.getElementById("done-row");

// for (let i = 0; i < newTask.length; i++) {
//     addBtn.addEventListener('click', function(e) {
//         let clickedBox = e.target;
//         clickedBox.child[1].enable;

// });

// let changeBtn = document.getElementsByClassName('change-btn');
// changeBtn.addEventListener('click', function(e) {
//     let clickedBox = e.target;
//     clickedBox.child[1].enable;
// })


//Varför funkar inte eventlistener på mina classer? 

// let deleteBtn2 = document.getElementsByClassName('delete-btn2');
// deleteBtn2.addEventListener('click', function(e) {
//     let clickedBox = e.target;
//     clickedBox.parentNode.remove();
//})




// Reset button (VG-del)
// let resetBtn = document.getElementById('reset-btn');
// resetBtn.addEventListener('click', function(e) {
//     clickedBox = e.target;
//     finishedTasks.remove();
//     taskRow.remove();
// })