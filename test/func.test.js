import {
  addTask,
  remove,
} from './test.js';

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
    const mockDescription = 'Testing Part 1';
    const expectedList = [
      {
        index: 1,
        description: 'Testing Part 1',
        completed: false,
      },
    ];

    addTask(mockDescription);
    expect(JSON.parse(localStorage.store.myList)).toStrictEqual(expectedList);
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

    localStorage.setItem('myList', removeList);

    remove(removeindex);
    expect(JSON.parse(localStorage.store.myList)).toStrictEqual('[]');
  });
});

global.localStorage = localStorageMock;