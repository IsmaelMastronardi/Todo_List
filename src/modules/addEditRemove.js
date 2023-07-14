import Icon from '../assets/images/icon.png';
import Trash from '../assets/images/trash.png';
import { switchCompleted } from './statusUpdates.js';
import { displayList, clearList } from './displayAndClear.js';

const addTaskArea = document.querySelector('#addTaskArea');
export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const addTask = () => {
  const text = addTaskArea.value;
  if (addTaskArea.value !== '') {
    const newTask = {
      description: text.trimStart(),
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(newTask);
    clearList();
    tasks.forEach((obj) => displayList(obj));
    addTaskArea.value = '';
  }
  updateLocalStorage();
};

function updateArray() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
}

const remove = (itemId) => {
  tasks.splice(itemId - 1, 1);
  updateArray();
  clearList();
  tasks.forEach((obj) => displayList(obj));
  updateLocalStorage();
};
const edit = (e, shortId, dots) => {
  e.stopPropagation();
  const elem = e.target;
  if (elem.matches('.itemTextArea')) {
    dots.src = Trash;
    dots.addEventListener('click', () => {
      remove(shortId);
    });
    elem.addEventListener('keypress', (e) => {
      if (e.which === 13) {
        e.preventDefault();
        const text = e.target.value;
        if (text.trimStart().replace(/[\n]/gm, '').trimEnd() === '') {
          remove(shortId);
        } else {
          tasks[shortId - 1].description = text.trimStart().replace(/[\n]/gm, '').trimEnd();
          updateLocalStorage();
        }
      }
    });
    document.body.addEventListener('click', () => {
      dots.src = Icon;
    });
  }
};

export const inspectTask = (e) => {
  const newId = e.target.id;
  const shortId = newId.substring(1);
  const dots = document.querySelector(`#d${shortId}`);
  edit(e, shortId, dots);
  switchCompleted(e, shortId, tasks);
  updateLocalStorage();
};