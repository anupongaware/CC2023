import { useEffect, useReducer } from "react";
import Pagination from "./components/Pagination";
import axios from "axios";
import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

//ตัว set เงื่อนไข
function reducer(state, action) {
  if (action.type === "LOAD_TODO") {
    return action.payload.todos;
  } else if (action.type === "CREATE_TODO") {
    return [action.payload.todo, ...state];
  }
}

function App() {
  // const obj = useReducer(reducer, []);  จะ return เป็น array ของค่า current state และ dispatchFunction  ==> return [currentState, dispatchFunction]
  // dispatchFunction(actionObj)

  const [todos, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch({ type: "LOAD_TODO", payload: { todos: res.data.todos } });
      })
      .catch((err) => console.log(err));
  }, []);

  //handle funtions
  const createTodo = (title) => {
    axios
      .post("http://localhost:8080/todos", { title, completed: false })
      .then((res) => {
        dispatch({ type: "CREATE_TODO", payload: { todo: res.data.todo } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm createTodo={createTodo} />
      </div>

      <TodoContainer />
      <TodoList />

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        <Pagination />
      </div>
    </div>
  );
}

export default App;
