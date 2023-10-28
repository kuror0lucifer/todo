import React, { useState } from "react";
import Block from "./components/Block";

const todo = [
  {
    id: 1,
    title: "Buy new sweatshirt",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Begin promotional phase",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Read an article",
    isCompleted: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(todo);

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
  };

  return <Block todo={todos} onChange={onChange} />;
}
