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
