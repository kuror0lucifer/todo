import React, { useState } from "react";
import Item from "./components/Item";

const data = [
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
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  console.log(todos);

  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-5">ToDo List</h1>
      <div className="flex items-center justify-center h-full w-4/5 mx-auto pt-10">
        <Item data={data} changeTodo={changeTodo} />
      </div>
    </>
  );
}
