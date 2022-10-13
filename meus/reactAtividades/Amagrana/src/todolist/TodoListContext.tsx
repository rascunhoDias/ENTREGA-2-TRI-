import React, { useState } from "react";

interface TTodoList {
  list: string[]
  setList: React.Dispatch<React.SetStateAction<string[]>>
}

export const TodoListContext = React.createContext({} as TTodoList)

export const TodoListContextProvider = (props: React.PropsWithChildren) => {
  const [list, setList] = useState(() => {
    const dadosLocais = localStorage.getItem("localData")
    if (dadosLocais)
      return JSON.parse(dadosLocais) as string[]
    return ["Dunha", "Dirce"]
  })

  return (
    <TodoListContext.Provider value={{list, setList}}>
      {props.children}
    </TodoListContext.Provider>
  )
}