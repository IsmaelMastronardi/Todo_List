import './style.css';
import {
  tasks, todoList, displayList, addTask, inspectTask,
} from './modules/addEditRemove.js';
import arrow from './assets/images/backArrow.png';

const addBtn = document.querySelector('#addBtn');
const addBtnImg = document.querySelector('#buttonImg');

addBtnImg.src = arrow;
addBtn.addEventListener('click', addTask);

tasks.sort((a, b) => a.index - b.index);
tasks.forEach((obj) => displayList(obj));

todoList.addEventListener('click', inspectTask);
