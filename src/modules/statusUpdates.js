export const switchCompleted = (e, shortId, tasks) => {
  const btnId = shortId - 1;
  if (e.target.matches('.checkboxBtn')) {
    const currentValue = tasks[btnId].completed;
    tasks[btnId].completed = !currentValue;
  }
};

export const hola = "a";