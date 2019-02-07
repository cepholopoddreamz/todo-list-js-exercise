// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}
// // DRIVER CODE BELOW

const task2 = newTask("Say something", "risk energy and belief being collapsed and loosing time on work you need to complete - but maybe shift the conditions just a little");
const task1 = newTask("Shut up and let it go" , "take care of you and dont waste energy trying to change forces that are beyond the bounds of any one camp, curriculum");
const tasks = [task1, task2];

task1.logState(); 
task1.markCompleted();
task1.logState();

task1.title
task1.markCompleted();

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Shut up"); // task 0
// newTask("Say something"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed



// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {

//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task;
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// // marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }

// // DRIVER CODE BELOW

// const task1 = newTask("re-orient the space");const task2 = newTask("re-orient the question"); 
// const task3 = newTask("stay away from subjective")

// const tasks = [task1, task2];
// // task 1

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed
