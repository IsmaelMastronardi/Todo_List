import Icon from '../assets/images/icon.png';
import Trash from '../assets/images/trash.png';

export const todoList = document.querySelector('#todoListPlaceholder');
const addTaskArea = document.querySelector('#addTaskArea');
export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function displayList(obj) {
  const item = document.createElement('li');
  item.className = 'ListItem';
  item.id = obj.index;
  item.innerHTML = `
  <input type="checkbox" class="checkboxBtn" id="${obj.index}">
  <textarea name="itemDescription" class="itemTextArea" id="${obj.index}" rows="1" cols="50">
  ${obj.description}
  </textarea>
  <div class="imgDiv">
  <img src="${Icon}" class="Dots" id="d${obj.index}">
  </div>
  `;
  todoList.appendChild(item);
}

export function clearList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
}

export const addTask = () => {
  if (addTaskArea.value !== '') {
    const newTask = {
      description: addTaskArea.value,
      completed: false,
      index: tasks.length,
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
    tasks[i].index = i;
  }
}

export const switchCompleted = (e) => {
  const btnId = e.target.id;
  if (e.target.matches('.checkboxBtn')) {
    const currentValue = tasks[btnId].completed;
    tasks[btnId].completed = !currentValue;
  }
  updateLocalStorage();
};

const remove = (itemId) => {
  tasks.splice(itemId, 1);
  updateArray();
  clearList();
  tasks.forEach((obj) => displayList(obj));
  updateLocalStorage();
};

export const edit = (e) => {
  e.stopPropagation();
  const itemId = e.target.id;
  const elem = e.target;
  const dots = document.querySelector(`#d${itemId}`);
  if (elem.matches('.itemTextArea')) {
    dots.src = Trash;
    dots.addEventListener('click', () => {
      remove(itemId);
    });
    elem.addEventListener('keypress', (e) => {
      if (e.which === 13) {
        e.preventDefault();
        const text = e.target.value;
        if (text.trimStart().replace(/[\n]/gm, '').trimEnd() === '') {
          remove(itemId);
        } else {
          tasks[itemId].description = text.trimStart().replace(/[\n]/gm, '').trimEnd();
          updateLocalStorage();
        }
      }
    });
    document.body.addEventListener('click', () => {
      dots.src = Icon;
    });
  }
};

export const clearTasks = () => {
  const len = tasks.length;
  for (let i = len - 1; i >= 0; i -= 1) {
    if (tasks[i].completed === true) {
      console.log(tasks[i]);
      tasks.splice(i, 1);
      console.log(tasks);
    }
    updateArray();
  }
  clearList();
  tasks.forEach((obj) => displayList(obj));
  updateLocalStorage();
};