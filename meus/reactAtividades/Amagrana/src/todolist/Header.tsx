import { useContext } from "react"
import { TodoListContext } from "./TodoListContext"

export default function () {
  const context = useContext(TodoListContext)

  return <>
    <h1>ToDoList: {context.list.length}</h1>
  </>
}