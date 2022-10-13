 import { useEffect, useState } from "react"
 import { FormEnderecoContext } from "../pages/formEnderecoContext"



export default function({cpe}: props){
const {setCEP, CEP, setCidade, setUf} = React.useContext(formEnderecoContext)
const [loading, setLoading] = useState(true)



const atualizaCEP = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.currentTarget.value.length < 9) return
    setCEP(ev.currentTarget.value)
    buscarEndereco(ev.currentTarget.value)
}

 const buscarEndereco = async(CEP:string) {
    setLoading(true)
    if(!CEP) return
    const requestCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    const CEP = await requestCEP.json()

    

    setCEP(CEP)
}

useEffect(() => {
    buscarEndereco()

}, [CEP])


const CepMask = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
    ev.currentTarget.value = ev.currentTarget.value.replace(/^(\d{5})(\d{3})/, "$1-$2")
}

return <>

    <div className="input-container">
        <input className="input-block" maxLength={8} type="text" placeholder="Insira o CEP" onKeyUp = 
        {
            (ev) => {
            CepMask(ev)
            atualizaCEP(ev)
        } }/> 
    </div>
    
    </>
}

