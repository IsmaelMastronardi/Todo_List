import Icon from '../assets/images/icon.png';

export const todoList = document.querySelector('#todoListPlaceholder');
const addTaskArea = document.querySelector('#addTaskArea');

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function displayList(obj) {
  const item = document.createElement('li');
  item.className = 'ListItem';
  item.innerHTML = `
  <input type="checkbox" class="checkboxBtn" id="${obj.index}">
  <textarea name="itemDescription" class="itemTextArea" rows="1" cols="50">
  ${obj.description}
  </textarea>
  <div class="imgDiv">
  <img src="${Icon}" class="Dots">
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

export const switchCompleted = (e) => {
  const btnId = e.target.id;
  if (e.target.matches('.checkboxBtn')) {
    const currentValue = tasks[btnId].completed;
    tasks[btnId].completed = !currentValue;
  }
  updateLocalStorage();
};

function updateArray() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
}

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
