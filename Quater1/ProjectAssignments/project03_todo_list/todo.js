"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const fs = __importStar(require("fs"));
let tasks = [];
let taskIdCounter = 1;
function loadTasks() {
    try {
        const data = fs.readFileSync('tasks.json', 'utf8');
        tasks = JSON.parse(data);
        taskIdCounter = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    }
    catch (error) {
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
function addTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const { taskText } = yield inquirer.prompt([
            {
                type: 'input',
                name: 'taskText',
                message: 'Enter a new task:',
            },
        ]);
        const newTask = {
            id: taskIdCounter++,
            text: taskText,
        };
        tasks.push(newTask);
        saveTasks();
        console.log(`Task added: ${newTask.text}`);
    });
}
function deleteTask() {
    return __awaiter(this, void 0, void 0, function* () {
        if (tasks.length === 0) {
            console.log('No tasks to delete.');
            return;
        }
        const { taskId } = yield inquirer.prompt([
            {
                type: 'input',
                name: 'taskId',
                message: 'Enter the ID of the task you want to delete:',
            },
        ]);
        const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId, 10));
        if (taskIndex === -1) {
            console.log('Task not found.');
        }
        else {
            const deletedTask = tasks.splice(taskIndex, 1)[0];
            saveTasks();
            console.log(`Deleted task: ${deletedTask.text}`);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        loadTasks();
        while (true) {
            const { choice } = yield inquirer.prompt([
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
                    yield addTask();
                    break;
                case 'Delete Task':
                    yield deleteTask();
                    break;
                case 'Quit':
                    console.log('Goodbye!');
                    return;
            }
        }
    });
}
main();
