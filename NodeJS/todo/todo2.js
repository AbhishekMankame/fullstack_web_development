const fs = require('fs')
const filePath = "./task.json";

// Load tasks from JSON file
const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        JSON.parse(dataJSON)
        return JSON.parse(dataJSON)
    } catch(error) {
        return []
    }
}

// save tasks to JSON file
const saveTasks = (task) => {
    const dataJSON = JSON.stringify(task)
    fs.writeFileSync(filePath, dataJSON)
}

// add task method
const addTask = (task) => {

    if(!task) {
        console.log("Please provide a task!")
        return;
    }
    const tasks = loadTasks()
    tasks.push({task})
    saveTasks(tasks)
    console.log("Task added ", task);
}

// List all tasks
const listTasks = () => {
    const tasks = loadTasks()
    if(tasks.length === 0) {
        console.log("No tasks found!")
        return;
    }
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
}

// Remove task method
const removeTask = (index) => {
    const tasks = loadTasks();
    if(isNaN(index) || index < 1 || index > tasks.length) {
        console.log("Invalid task number!");
        return;
    }
    const removedTask = tasks.splice(index - 1, 1);
    saveTasks(tasks);
    console.log("Task removed:", removedTask[0].task);
}

// console.log(process.argv)

const command = process.argv[2]
const argument = process.argv[3]

if(command === 'add') {
    addTask(argument)
}
else if(command === 'list') {
    listTasks()
}
else if(command === 'remove') {
    removeTask(parseInt(argument))
}
else {
    console.log("Command not found!")
}