
//When clicking Add-btn:
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function(e) {

    //Error message when trying to sumbit empty text field
    let textField = document.getElementById('text-field')
    let existingErrorMessage = document.getElementById('error-message')
    console.log(existingErrorMessage)
    if(existingErrorMessage){
     existingErrorMessage.remove()
    }

    if (textField.value === '') {
       let errorMessage = document.createElement('div')
        errorMessage.id = "error-message";
        errorMessage.innerHTML= `<p>You can't add an empty task</p>`;
        document.getElementById('fill-in-container').append(errorMessage);

    } else {

//Adds task to task list, creates "task row"- elements
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

//
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
        let existingErrorMessage = document.getElementById('error-message')


        if(existingErrorMessage){
            existingErrorMessage.remove()
            
        
        } if(inputTextTaskList.value.length == 0 || !inputTextTaskList.value.trim()){
            let errorMessage = document.createElement('div')
            errorMessage.id = "error-message";
            errorMessage.innerHTML= `<p>Text is requirered </p>`;
            liTaskList.append(errorMessage);
        } else {
        clickedBtn.innerHTML = `Change`;
        inputTextTaskList.disabled = true;
    }}

})

//
let deleteBtn = document.createElement('button');
deleteBtn.id = "delete-btn";
deleteBtn.innerHTML =`Delete`;

liTaskList.append(deleteBtn)

deleteBtn.addEventListener('click', function(e) {
    let clickedBtn = e.target;
    clickedBtn.parentNode.remove();

})
//
let ulDoneList = document.getElementById('ul-done-list');

//
inputCheckbox.addEventListener('click', function(e) {

    
    let clickedBox = e.target;
    clickedBox.parentNode.remove();
    inputCheckbox.disabled = true;
    ulDoneList.append(liTaskList);
    
})

// Reset all button
let resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', function(e) {
    let clickedBtn = e.target;
    let toDoListLength = document.querySelectorAll("#ul-task-list li").length;
    for(let i = 0; i < toDoListLength; i++) {
    console.log(i)
        document.getElementById('ul-task-list').firstChild.remove();
    }

    let doneListLength = document.querySelectorAll("#ul-done-list li").length;
    for(let i = 0; i < doneListLength; i++) {
        console.log(i)
                document.getElementById('ul-done-list').firstChild.remove();
    }

    clickedBtn.parentNode.innerHTML = `<p>Your list is empty!</p><span style='font-size:30px;'>&#9749;&#10024;</span>`;
    
})
}
})






