
import { useState } from "react";
import InputCidades from "../components/inputCidades";
import InputEstados from "../components/inputEstados";
import InputCEP from "../components/inputCEP";

export default function() {
    const [uf, setUf] = useState("")

    return <>
        <h1>Cadastro: Dados de Endereço</h1>
        <InputEstados setUf={setUf} />
        <InputCidades uf={uf} />
        
    </>
}