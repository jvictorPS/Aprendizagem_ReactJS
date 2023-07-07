import Cartao from "./components/Cartao"
import banner1 from "./assets/imagem1.jpg"
import banner2 from "./assets/imagem2.jpg"
import banner3 from "./assets/imagem3.jpg"

function App() {
  return (
    <>
        <h1>Exercicio</h1>
        <Cartao banner={banner1} titulo="Pôster: Star Wars (1977)" />
        <Cartao banner={banner2} titulo="Pôster: Empire Strikes Back (1980)" />
        <Cartao banner={banner3} titulo="Pôster: Return of the Jedi (1983)" />
    </>
  )
}

export default App