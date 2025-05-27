import { useEffect, useState } from "react"

export function Exemplo1() {

    const [numero, setNumero] = useState(0)

    useEffect(() => {
      alert("O numero mudou!")
    }, [numero])

    return (
      <section>
      <h1>useEffect</h1>

        <div>
          <h2>Numero: {numero}</h2>
          <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
        </div>
      </section>
    )
}