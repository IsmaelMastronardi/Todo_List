import Icon from '../assets/images/icon.png';

export const todoList = document.querySelector('#todoListPlaceholder');

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

export function clearList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
}
