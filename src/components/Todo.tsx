import React, { Fragment, useState } from "react";

// interface ITodo {
//   title: String,
//   active: Boolean
// }

export default function Todo(): JSX.Element {
  const [todo, setTodo] = useState<string>("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodo('')
  }
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} required={true} />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  )
};