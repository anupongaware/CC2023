import { useState } from "react";

function TodoForm(props) {
  const { createTodo } = props;
  const [input, setInput] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    createTodo(input);
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="btn btn-primary">
            <i className="fa-solid fa-check" />
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        {/* <small className="text-danger">Title is required.</small> */}
      </form>
    </>
  );
}

export default TodoForm;
