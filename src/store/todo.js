import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    {id:1, title:'Hello world1!', completed: false},
    {id:2, title:'Hello world2!', completed: false},
    {id:3, title:'Hello world3!', completed: false},
  ];
  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo){
   this.todos.push(todo);
  }
  removeTodo(id){
    this.todos = this.todos.filter(t => t.id !== id);
  }
  completeTodo(id){
    this.todos = this.todos.map(t => t.id === id ? {...t, completed: !t.completed} : t)
  }

  get total(){
    return this.todos?.length;
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.todos = [...this.todos, ...json]
      })
  }
}

export default new Todo();