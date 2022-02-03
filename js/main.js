let ulDoneList = document.getElementById('ul-done-list');


//When clicking Add-btn
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function(e) {
  
    addNewTask(e);
})


function addNewTask(e) {
    if(document.querySelector("div span")) {
        e.target.parentNode.parentNode.parentNode.childNodes[7].lastChild.remove();
        e.target.parentNode.parentNode.parentNode.childNodes[7].lastChild.remove();
    }

    //Error message when trying to sumbit empty text field
    let textField = document.getElementById('text-field')
    let existingErrorMessage = document.getElementById('error-message')
    if(existingErrorMessage){
     existingErrorMessage.remove()
    }

    if (textField.value === '' || !textField.value.trim()) {
       let errorMessage = document.createElement('div')
        errorMessage.id = "error-message";
        errorMessage.innerHTML= `<p>You can't add an empty task</p>`;
        document.getElementById('fill-in-container').append(errorMessage);

    } else {

//Adds task to task-list, creates "task row"- elements
let ulTaskList = document.getElementById('ul-task-list');

//
let liTaskList = document.createElement('li');
liTaskList.id = "li-task-list";

ulTaskList.append(liTaskList);

//
let inputCheckbox = document.createElement('input');
inputCheckbox.id = "input-checkbox";
inputCheckbox.setAttribute('type', 'checkbox')

liTaskList.append(inputCheckbox)

//
let inputTextTaskList = document.createElement('input');
inputTextTaskList.id = "input-text-task-list";

inputTextTaskList.value = textField.value; 
textField.value = "";
inputTextTaskList.disabled = true;

liTaskList.append(inputTextTaskList)

// Change task button
let changeBtn = document.createElement('button');
changeBtn.id = "change-btn";
changeBtn.innerHTML = `Change`;

liTaskList.append(changeBtn)

changeBtn.addEventListener('click', taskBtns.editTask);


// Delete task button
let deleteBtn = document.createElement('button');
deleteBtn.id = "delete-btn";
deleteBtn.innerHTML =`Delete`;

liTaskList.append(deleteBtn)

deleteBtn.addEventListener('click', taskBtns.deleteTask);


//
inputCheckbox.addEventListener('click', taskBtns.taskCompleted);

// Reset all button
let resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetList);

function resetList(e) {
        document.getElementById('ul-task-list').innerHTML = "";
        document.getElementById('ul-done-list').innerHTML = "";
    
        e.target.parentNode.innerHTML += `<h3>Your list is empty!</h3><span style='font-size:30px;'>&#9749; &#10024;</span>`;
}

}
}

const taskBtns = {
    
    editTask(e) { 

        if(e.target.innerHTML == `Change`) {
            e.target.innerHTML = `Save`;
            e.target.previousSibling.disabled = false;
    
        } else {
            let existingErrorMessage = document.getElementById('error-message')
    
    
            if(existingErrorMessage){
                existingErrorMessage.remove()
                
            
            } if(e.target.previousSibling.value.length == 0 || !e.target.previousSibling.value.trim()){
                let errorMessage = document.createElement('div')
                errorMessage.id = "error-message";
                errorMessage.innerHTML= `<p>Text is requirered </p>`;
                e.target.parentNode.append(errorMessage);
            } else {
            e.target.innerHTML = `Change`;
            e.target.previousSibling.disabled = true;
        }}
    }
    ,
    deleteTask(e) {
        e.target.parentNode.remove();
        
    }
    ,
    taskCompleted(e) { 
        e.target.parentNode.remove();
        e.target.disabled = true;
        ulDoneList.append(e.target.parentNode);
        }
}



