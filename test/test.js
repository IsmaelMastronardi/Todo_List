/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTask = () => {
  let tasks = localStorage.getItem('tasks');
  if (tasks === null) {
    tasks = [];
  }
  const newTask = {
    description: 'text',
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  updateLocalStorage();
};

const remove = (e, itemId) => {
  let tasks = localStorage.getItem('tasks');
  if (tasks === null) {
    tasks = [];
  }
  tasks.splice(itemId - 1, 1);
  updateLocalStorage();
};

export {
  addTask, remove,
};