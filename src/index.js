import './style.css';
import {
  tasks, todoList, displayList, addTask, switchCompleted, clearTasks, edit, removeTask
} from './modules/addEditRemove.js';

const addBtn = document.querySelector('#addBtn');
const deleteBtn = document.querySelector('#clearBtn');
addBtn.addEventListener('click', addTask);

tasks.sort((a, b) => a.index - b.index);
tasks.forEach((obj) => displayList(obj));

todoList.addEventListener('click', switchCompleted);
todoList.addEventListener('click', edit);
// todoList.addEventListener('click', removeTask);

deleteBtn.addEventListener('click', clearTasks);
