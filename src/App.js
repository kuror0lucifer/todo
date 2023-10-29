import React, { useState } from "react";
import Block from "./components/Block";
import CreateField from "./components/СreateField";

const todo = [];

export default function App() {
  const [todos, setTodos] = useState(todo);

  const onDel = (id) => {
    setTodos([...todos.filter((t) => t.id !== id)]);
  };

  const onChange = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            isCompleted: !todoItem.isCompleted,
          };
        }
        return todoItem;
      });
    });
    console.log(todo.id);
  };

  return (
    <>
      <Block todo={todos} onChange={onChange} onDel={onDel} />
      <CreateField setTodos={setTodos} />
    </>
  );
}
