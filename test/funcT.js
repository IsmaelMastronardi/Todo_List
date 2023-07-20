const addTask = () => {
  let tasks = localStorage.getItem('tasks');
  if (tasks === null) {
    tasks = [];
  }
  const newTask = {
    completed: false,
    description: 'text',
    index: 1,
  };
  tasks.push(newTask);
  localStorage.setItem('tasks', tasks);
};

const removeTasks = (e, itemId) => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks === null) {
    tasks = [];
  }

  tasks.splice(itemId - 1, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {
  addTask, removeTasks,
};