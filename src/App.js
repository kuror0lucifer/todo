import React from "react";
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
  return <Block todo={todo} />;
}
