import {
  addTask,
  removeTasks,
} from './funcT.js';

const localStorageMock = (() => {
  let store = {};

  return {
    store,
    getItem: (key) => store[key] || [],
    setItem: (key, value) => {
      store[key] = JSON.stringify(value);
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

describe('addTask', () => {
  it('Adding a new object of tasks and save it in Local Storage', () => {
    const expectedList = [
      {
        completed: false,
        description: 'text',
        index: 1,
      },
    ];

    addTask();
    expect(JSON.parse(localStorage.store.tasks)).toStrictEqual(expectedList);
  });
});

describe('remove', () => {
  it('Deleting an existing object task from the Local Storage using its index', () => {
    const removeindex = 1;
    const removeList = [
      {
        index: 1,
        description: 'Testing Part 2',
        completed: false,
      },
    ];

    localStorage.setItem('tasks', removeList);

    removeTasks(removeindex);
    expect(JSON.parse(localStorage.store.tasks)).toStrictEqual('[]');
  });
});

global.localStorage = localStorageMock;