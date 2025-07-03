let tasks = [
  { label: 'Eat my lunch', done: true },
  { label: 'Make the bed', done: false },
  { label: 'Have some fun', done: false },
  { label: 'Finish my exercises', done: true },
  { label: 'Call my grandma', done: false },
  { label: 'Read a book', done: true }
];

let doneTasks = tasks.filter(function(task) {
  return task.done === true;
});

console.log(doneTasks);
