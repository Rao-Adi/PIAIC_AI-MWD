import inquirer from 'inquirer';
import fs from 'fs';

interface Task {
  id: number;
  text: string;
}

let tasks: Task[] = [];
let taskIdCounter: number = 1;

function loadTasks() {
  try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    tasks = JSON.parse(data);
    taskIdCounter = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  } catch (error) {
    tasks = [];
    taskIdCounter = 1;
  }
}

function saveTasks() {
  const data = JSON.stringify(tasks, null, 2);
  fs.writeFileSync('tasks.json', data, 'utf8');
}

function showTasks() {
  console.log('\nTasks:');
  tasks.forEach((task) => {
    console.log(`${task.id}. ${task.text}`);
  });
  console.log('');
}

async function addTask() {
  const { taskText } = await inquirer.prompt([
    {
      type: 'input',
      name: 'taskText',
      message: 'Enter a new task:',
    },
  ]);

  const newTask: Task = {
    id: taskIdCounter++,
    text: taskText,
  };

  tasks.push(newTask);
  saveTasks();
  console.log(`Task added: ${newTask.text}`);
}

async function deleteTask() {
  if (tasks.length === 0) {
    console.log('No tasks to delete.');
    return;
  }

  const { taskId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'taskId',
      message: 'Enter the ID of the task you want to delete:',
    },
  ]);

  const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId, 10));

  if (taskIndex === -1) {
    console.log('Task not found.');
  } else {
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    saveTasks();
    console.log(`Deleted task: ${deletedTask.text}`);
  }
}

async function main() {
  loadTasks();

  while (true) {
    const { choice } = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Todo App Menu:',
        choices: ['View Tasks', 'Add Task', 'Delete Task', 'Quit'],
      },
    ]);

    switch (choice) {
      case 'View Tasks':
        showTasks();
        break;
      case 'Add Task':
        await addTask();
        break;
      case 'Delete Task':
        await deleteTask();
        break;
      case 'Quit':
        console.log('Goodbye!');
        return;
    }
  }
}

main();
