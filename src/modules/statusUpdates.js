import { displayList, clearList } from './displayAndClear.js';

export const switchCompleted = (e, shortId, tasks) => {
  const todoListItem = document.getElementById(`${shortId}`);
  const btnId = shortId - 1;
  if (e.target.matches('.checkboxBtn')) {
    const currentValue = tasks[btnId].completed;
    tasks[btnId].completed = !currentValue;
    if (tasks[btnId].completed === true) {
      todoListItem.classList.add('hasLineThrough');
    } else {
      todoListItem.classList.remove('hasLineThrough');
    }
    // text-decoration: line-through;
  }
};

export const clearAllCompleted = (oldArr) => {
  const filteredArray = oldArr.filter((item) => item.completed === false);
  for (let i = 0; i < filteredArray.length; i += 1) {
    filteredArray[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(filteredArray));
  oldArr.splice(0, oldArr.length);
  for (let i = 0; i < filteredArray.length; i += 1) {
    oldArr.push(filteredArray[i]);
  }
  clearList();
  oldArr.forEach((obj) => displayList(obj));
};
