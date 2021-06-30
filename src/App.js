import "./styles.css";
import React from "react";
const todosItem = [
  { id: 1, text: "Wash dishes", done: true },
  { id: 2, text: "Do laundry", done: false },
  { id: 3, text: "Take shower", done: false }
];
export default function App() {
  const [todos, setTodos] = React.useState(todosItem);
  return (
    <div className="App">
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <>
          <input type="checkbox" value={todo.done} checked={todo.done} />
          <li key={todo.id}> {todo.text} </li>
        </>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  function handleAddTodo(e) {
    e.preventDefault();
    const text = e.target.elements.addTodo.value;
    console.log(text);
    const todo = {
      id: 4,
      text,
      done: false
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="addTodo" placeholder="Add To Do" />
      <button type="submit"> Submit </button>
    </form>
  );
}
