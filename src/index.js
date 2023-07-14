import './style.css';
import {
  tasks, addTask, inspectTask,
} from './modules/addEditRemove.js';
import { todoList, displayList } from './modules/displayAndClear.js';
import { clearAllCompleted } from './modules/statusUpdates.js';
import arrow from './assets/images/backArrow.png';

const addBtn = document.querySelector('#addBtn');
const addBtnImg = document.querySelector('#buttonImg');
const clearBtn = document.querySelector('#clearBtn');
const addTaskTextArea = document.querySelector('#addTaskArea');
addTaskTextArea.addEventListener('keypress', (e) => {
  if (e.which === 13) {
    e.preventDefault();
    addTask();
  }
});

addBtnImg.src = arrow;
addBtn.addEventListener('click', addTask);

tasks.sort((a, b) => a.index - b.index);
tasks.forEach((obj) => displayList(obj));

todoList.addEventListener('click', inspectTask);

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearAllCompleted(tasks);
});
