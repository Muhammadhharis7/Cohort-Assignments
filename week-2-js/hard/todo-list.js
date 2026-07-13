/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

// class Todo {
//   Todo(){
//     this.todos = []
//   }
//   add(Todo){
//     this.todos.push(Todo)
//     return this.todos;
//   }
//   removeindexOfToDo(index){
//     if(this.todo.length < 1){
//       return "The To-do list is empty"
//     }
//     return this.todos.splice(index,1)
//   }
//   update(index,updatedToDo){
//     if(this.todo.length < 1){
//       return "The To-do list is empty"
//     }
//     this.todos.splice(index,1,updatedToDo)
//     return this.todos
//   }
//   getAll(){
//     if(this.todo.length < 1){
//       return "The To-do list is empty"
//     }
//     return this.todos
//   }
//   get(indexOfToDo){
//     return this.todos[indexOfToDo]
//   }
//   clear(){
//     if(this.todo.length < 1){
//       return "The To-do list is empty"
//     }
//     return this.todo = []
//   }
// }

// module.exports = Todo;


class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
    return this.todos;
  }

  remove(index) {
    return this.todos.splice(index, 1);
  }

  // update(index, updatedTodo) {
  //   this.todos.splice(index, 1, updatedTodo);
  //   return this.todos;
  // }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      return this.todos;
    }
    this.todos.splice(index, 1, updatedTodo);
    return this.todos;
  }

  getAll() {
    return this.todos;
  }

  // get(index) {
  //   return this.todos[index];
  // }

  get(index) {
    if (index < 0 || index >= this.todos.length) {
      return null;
    }
    return this.todos[index];
  }

  clear() {
    this.todos = [];
    return this.todos;
  }
}

module.exports = Todo;