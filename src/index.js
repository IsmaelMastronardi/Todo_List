import './style.css';
import {
  tasks, todoList, displayList, addTask, inspectTask,
} from './modules/addEditRemove.js';

const addBtn = document.querySelector('#addBtn');
const deleteBtn = document.querySelector('#clearBtn');
addBtn.addEventListener('click', addTask);

tasks.sort((a, b) => a.index - b.index);
tasks.forEach((obj) => displayList(obj));

todoList.addEventListener('click', inspectTask);
