import { useState, useEffect } from "react"
import axios from "axios"

export function Exemplo2() {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")




    useEffect(()=> {
       if (cep.length === 8){
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setCidade(response.data.cidade)
            setEstado(response.data.estado)
            setUf(response.data.uf)
        })
       }
    }, [cep])

    return (
        <section>
            <h2>Busca CEP</h2>

            <input type="number" placeholder="Digite o CEP" onChange={(event)=> setCep(event.target.value)}/>
            
            <div>
            {cep.length === 8 && <p>{logradouro}, {bairro}, {cidade}, {estado}, {uf}</p>}
            </div>
        </section>
    )
}