import './style.css';
import Icon from './assets/images/icon.png';

const tasks = [
  {
    description: 'First Item',
    completed: false,
    index: 1,
  },
  {
    description: 'Third Item',
    completed: false,
    index: 3,
  },
  {
    description: 'Second Item',
    completed: false,
    index: 2,
  },
];

const todoList = document.querySelector('#todoListPlaceholder');

function displayList(obj) {
  const item = document.createElement('li');
  item.className = 'ListItem';
  item.innerHTML = `
  <input type="checkbox" class"checkboxBtn">
  <textarea name="itemDescription" class="itemTextArea" rows="1" cols="50">
  ${obj.description}
  </textarea>
  <div class="imgDiv">
  <img src="${Icon}" class="Dots">
  </div>
  `;
  todoList.appendChild(item);
}

tasks.sort((a, b) => a.index - b.index);
tasks.forEach((obj) => displayList(obj));
