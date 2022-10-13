import { useState } from 'react'
import './App.css'


function fiboR(vezes:number){
  const arr = [0 ]
  vezes = Math.abs(vezes) ?? 2
  while(vezes--){
    arr.push(arr[arr.length -1] + arr[arr.length - 2])
  }
  return arr

}

function App() {
  let [fibo, setFabo] = useState([0,1])

  const keydown: React.KeyboardEventHandler<HTMLInputElement> = ev => {
    if(ev.key != "Enter") return
    const vezes = parseInt(ev.currentTarget.value) ?? 0
    setFabo(fiboR(vezes))
  }

  return (
    <div className="App">
      <input onKeyUp={keydown}></input>
      <br />
    {fibo.join(", ")}
    </div>
  )
}

export default App
