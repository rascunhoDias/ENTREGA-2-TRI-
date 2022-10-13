import { useState, useEffect, KeyboardEvent, useContext } from "react"
import { TodoListContext } from "./TodoListContext"

export default function (props: { 
  title: string, 
}) {
  const {list, setList} = useContext(TodoListContext)

  const store = () => {
    localStorage.setItem("localData", JSON.stringify(list))
  }

  useEffect(store, [list])

  const adicionar = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.code != "Enter") return
    ev.preventDefault()
    setList([...list, ev.currentTarget.value])
    ev.currentTarget.value = ""
  }

  const remover = (removeidx: number) => {
    // // 1
    // const newList = list.filter((val, idx) => {
    //   if(idx == removeidx) {
    //     return false
    //   }
    //   return true
    // })
    // setList(newList)

    // // 2
    // const newList = list.filter((val, idx) => {
    //   if (idx == removeidx)
    //     return false
    //   return true
    // })
    // setList(newList)

    // // 3
    // const newList = list.filter((val, idx) => {
    //   return (idx != removeidx)
    // })
    // setList(newList)

    // //4
    // const newList = list.filter((val, idx) => (idx != removeidx))
    // setList(newList)

    // 5
    setList(list.filter((_, idx) => (idx != removeidx)))
  }

  return <>
    <input type="text" onKeyUp={adicionar} placeholder={props.title} />
    {list.map((el, idx) =>
      <div key={idx} onClick={() => remover(idx)}>{el}</div>
    )}
  </>
}