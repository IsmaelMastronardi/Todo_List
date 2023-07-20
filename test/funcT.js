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

const edit = (newText) => {
  const tasks = [];

  const myTasks = {
    completed: false,
    description: 'old Text',
    index: 1,
  };

  myTasks.description = newText;
  tasks.push(myTasks);
  localStorage.setItem('tasks', (tasks));
};

const switchCompleted = (shortId) => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks === null) {
    tasks = [];
  }
  const btnId = shortId - 1;
  const currentValue = tasks[btnId].completed;
  tasks[btnId].completed = !currentValue;
  localStorage.setItem('tasks', (tasks));
};

const clearAllCompleted = (oldArr) => {
  const filteredArray = oldArr.filter((item) => item.completed === false);
  for (let i = 0; i < filteredArray.length; i += 1) {
    filteredArray[i].id = i + 1;
  }
  localStorage.setItem('tasks', (filteredArray));
};

export {
  addTask, removeTasks, edit, switchCompleted, clearAllCompleted,
};