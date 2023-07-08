import { useState } from 'react'
import './App.css'

function App() {

  const [senha , setSenha] = useState('')
  const [copiar , setCopiar] = useState('Copiar')

  function gerarSenhar() {

    if (copiar === "Copiado!") {
      setCopiar('Copiar')
    }

    let stringAleatoria = ''
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 10; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return setSenha(stringAleatoria)
  }

  async function copiarSenha(senhaCopiada) {

        try {
          await navigator.clipboard.writeText(senhaCopiada);
          console.log('Texto copiado para a área de transferência!');
        } catch (error) {
          console.error('Erro ao copiar o texto:', error);
        }
      
    
    setCopiar('Copiado!')
  }

  const estiloBotao = {
    marginRight: '2rem',
  }

  return (
    <>
      <h1>Gerador de Senha</h1>
      <div className="card">
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
