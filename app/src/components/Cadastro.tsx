import { Dispatch, FormEventHandler, SetStateAction } from "react";

export default function ({ setRoute }: { setRoute: Dispatch<SetStateAction<string>> }) {
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { _name, email, password } = ev.currentTarget

    const request = await fetch(`/api/user/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: _name.value,
        email: email.value,
        password: password.value
      })
    })

    if (request.status >= 200 && request.status <= 299) {
      alert("PARABAEINZ!")
      setRoute("login")
      return
    }

    const responseData = await request.json()
    
    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
  }

  return <>
    <form onSubmit={enviarDados}>

    
      <h1 className="text_Cadastro">Cadastro</h1>
      <button className="text_Voltar" onClick={() => setRoute("login")}>Voltar</button>
      <input className="input_Name" name="_name" placeholder="name" />
      <input className="input_email" name="email" placeholder="email" />
      <input className="input_password" name="password" type="password" placeholder="password" />
      <button>cadastrar-se</button>
    </form>
  </>
}

