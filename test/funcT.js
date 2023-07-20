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

const edit = (e, newText) => {
  const tasks = [];

  const myTasks = {
    completed: false,
    description: 'old Text',
    index: 1,
  };
  

  myTasks.description = newText;
  tasks.push(myTasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  

  // const elem = e.target;
  // if (elem.matches('.itemTextArea')) {
  //   elem.addEventListener('keypress', (e) => {
  //     if (e.which === 13) {
  //       e.preventDefault();
  //       myTasks.description = newText;
  //       localStorage.setItem('tasks', JSON.stringify(tasks));
  //     }
  //   });
  // }
};

export const editmylist = (id) => {
  const list = JSON.parse(localStorage.getItem('myList'));
  const textArea = document.getElementById(`text-area-${id}`);

  const edit = list.findIndex((task) => task.id === id);

  textArea.addEventListener('change', () => {
    list[edit].desc = textArea.value;
    textArea.innerText = list[edit].desc;
    localStorage.setItem('myList', JSON.stringify(list));
  });
  textArea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      localStorage.setItem('myList', JSON.stringify(list));
      textArea.innerText = list[edit].desc;
      textArea.blur();
    }
  });
};











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






export {
  addTask, removeTasks, edit,
};