/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function clearList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
}

export function displayList(obj) {
  const item = document.createElement('li');
  item.className = 'ListItem';
  item.id = obj.index;
  item.innerHTML = `
  <input type="checkbox" class="checkboxBtn" id="a${obj.index}">
  <textarea name="itemDescription" class="itemTextArea" id="b${obj.index}" rows="1" cols="50">${obj.description}</textarea>
  <div class="imgDiv">
  <img src="${Icon}" class="Dots" id="d${obj.index}">
  </div>
  `;
  todoList.appendChild(item);
  if (obj.completed === true) {
    const checkbox = document.querySelector(`#a${obj.index}`);
    checkbox.checked = true;
    const todoListItem = document.getElementById(`${obj.index}`);
    todoListItem.classList.add('hasLineThrough');
  }
}

const addTask = () => {
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

module.exports = sum;