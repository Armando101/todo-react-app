import { TODOS_STORAGE } from "../constants";
/**
 * A task
 * @typedef {{text: string, completed: boolean}} Task
 */

/**
 * Filter a list by name
 * @param {Task[]} list Array of task
 * @param {string} name param to filter similar task names
 */
export const filterTaskByName = (list, name) => {
  return list.filter((task) =>
    task.text.toLowerCase().includes(name.toLowerCase())
  );
};

/**
 *
 * @param {number} id task id
 * @param {Task[]} todos List of task or todos
 * @returns {[number, Task[]]}
 */

export const getIndex = (id, todos) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  const newTodos = [...todos];
  return [todoIndex, newTodos];
};

export const completeTodo = (id, todos) => {
  const [todoIndex, newTodos] = getIndex(id, todos);
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  return newTodos;
};

export const deleteTodo = (id, todos) => {
  const [todoIndex, newTodos] = getIndex(id, todos);
  newTodos.splice(todoIndex, 1);
  return newTodos;
};

export const saveTodos = (newTodos, setTodos) => {
  setTodos(newTodos);
  localStorage.setItem(TODOS_STORAGE, JSON.stringify(newTodos));
};
