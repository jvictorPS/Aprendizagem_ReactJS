import { useState } from 'react'
import './App.css'

function App() {

  const [senha , setSenha] = useState('')
  const [copiar , setCopiar] = useState('Copiar')
  const [tamanhoSenha , setTamanhoSenha] = useState(1)
  const [tamanhoPersonalizado , setTamanhoPersonalizado] = useState(false)

  function gerarSenhar() {
    if (copiar === "Copiado!") {
      setCopiar('Copiar')
    }

    let stringAleatoria = ''
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < tamanhoSenha; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return setSenha(stringAleatoria)
  }

function copiarSenha(senhaCopiada) {
  navigator.clipboard.writeText(senhaCopiada);
  setCopiar('Copiado!')
}
  const estiloBotao = {
    marginRight: '2rem',
  }
  return (
    <>
      <h1>Gerador de Senha</h1>
      <div className="card">
        <div style={{marginBottom: '3rem'}}>
          <label htmlFor="personalizarTamanhoSenha" style={{marginRight: '0.5rem'}}>Personalizar tamanho da senha?</label>
          <input 
            type="checkbox" 
            id="checkPersonalizar"
            value={tamanhoPersonalizado}
            onChange={() => setTamanhoPersonalizado(estadoAtual => !estadoAtual)}
          />
        </div>

        {tamanhoPersonalizado ? 
        <div className="containerTamanho">
        <input 
          type="number" 
          name="numeroCaracteres" 
          id="tamanhoSenha" 
          min={1}
          value={tamanhoSenha}
          onChange={(e) => setTamanhoSenha(e.target.value)}
        />
        </div> : null}

        <button style={estiloBotao} onClick={gerarSenhar}>
          Gerar
        </button>
        <button onClick={() => copiarSenha(senha)}>
          {copiar}
        </button>
        <p>
          {senha}
        </p>
      </div>
    </>
  )
}

export default App
