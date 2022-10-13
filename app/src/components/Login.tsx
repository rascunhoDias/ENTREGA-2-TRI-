import { Dispatch, FormEventHandler, SetStateAction } from "react";

export default function ({setRoute}: {setRoute: Dispatch<SetStateAction<string>>}) {
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { email, password } = ev.currentTarget

    const request = await fetch(`/api/login/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const responseData = await request.json()

    if (request.status >= 200 && request.status <= 299) {
      localStorage.setItem("token", responseData.token)
      alert("PARABAEINZ!")
      setRoute("teste")
      return
    }

    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
  }
  
  
  return <>
    <form onSubmit={enviarDados}>
      
      <div className="main-login">
        <div className="left-login">

      <h1>Mint.id</h1>
      <h1>Seus dados Aqui</h1>

        </div>

        <div className="right-login">
            <div className="card-login">
                <h1 className="titulo">Login</h1>
                <div>
                <h2>Email</h2>
                 <input className="class_input" name="email" placeholder="email" />
                </div>
                    
                <div>
                <h2>Password</h2>
                <input className="class_input" name="password" placeholder="password" />
                </div>

                <button className="btn_fun" onClick={() => {}}>entrar</button>
                <button className="btn_fun" onClick={() => setRoute("cadastro")}>cadastrar-se</button>
                <button className="btn_fun" onClick={() => setRoute("teste")}>Ver minhas Credenciais</button>
            </div>
        </div>
      </div>
    </form>
  </>
}