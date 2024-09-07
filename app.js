// ToDo List

// Selectors

const submitForm = document.getElementById("newTaskForm");
const addBtn = document.getElementById('submitBtn');
const taskText = document.getElementById('task');
const displayOfTasks = document.getElementById('listOfTasks');

//Array of Tasks

const allTasks = [];

// Events

submitForm.addEventListener('submit',(e)=>{
    e.preventDefault();
});

addBtn.addEventListener('click',()=>{
    const userInput = taskText.value;
    taskCreator(userInput);
    displayTasks(allTasks);
    
    taskText.value = '';   
    
});


//Creating Elements


function taskCreator(userInput){

    const newTask = document.createElement('obj');
    newTask['task'] = userInput;
    newTask['isComplete'] = false;
    allTasks.push(newTask);

};


function displayTasks(allTasks){
    
    for(let i=0; i < allTasks.length; i++){
        const newLi = document.createElement('LI');
        newLi.innerHTML = allTasks[i].task;
        displayOfTasks.appendChild(newLi);
      
       };


}

