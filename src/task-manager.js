import Todo from './todo.js';

export const addNewTask = ({ task, list }) => {
  const index = list.length;
  const todo = new Todo({ task, index });
  list.push(todo);
};

export const deleteTask = ({ index, list }) => {
  for (let i = index + 1; i < list.length; i += 1) {
    list[i].index -= 1;
  }
  list.splice(index, 1);
};

export const updateTask = ({ task, index, list }) => {
  list[index].task = task;
};
