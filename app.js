// ToDo List

// Selectors

const submitForm = document.getElementById("newTaskForm");
const addBtn = document.getElementById('submitBtn');
const taskInput = document.getElementById('task');
const displayOfTasks = document.getElementById('listOfTasks');

//Arrays of Tasks and Objects

// Each user input should become an object inside of allObjects with two keys and its value.
const allObjects = []; 
// Each task should be extracted from those objects and added to allTasks as li, these li's can be looped and displayed.
const allTasks = [];

// Events

submitForm.addEventListener('submit',(e)=>{
    e.preventDefault();
});

addBtn.addEventListener('click',()=>{
    const userInput = taskInput.value;
    objFactory(userInput);
    displayingTasks(allTasks);
    
    taskInput.value = '';   
    
});


//Creating Elements

// This Function creates objects and add them into an array.
function objFactory(input){

    const newObject = {};
    newObject['task'] = input;
    newObject['isComplete'] = false;
    allObjects.push(newObject);
    allTasks.push(makeTaskLi(newObject));
    console.log(allTasks);
    
};


function makeTaskLi(newObject) {

    const newLi = document.createElement('li');
    newLi.innerHTML = newObject.task;
    newLi.classList.add("tasksText");
    
    return newLi;

};


function displayingTasks(arrayOfLis){

    for(let tasks of arrayOfLis){
        displayOfTasks.appendChild(tasks)
    };


};

// mikesTodo

const mockTodos = [
    {
        title: 'Buy milk',
        done: true
    },
    {
        title: 'Buy cheese',
        done: true
    },
    {
        title: 'Buy peas',
        done: false
    },
    {
        title: 'Buy chicken',
        done: true
    },
    {
        title: 'Buy sausage',
        done: false
    }
];







