import Botao from "../Botao/Botao"
import style from "./Cartao.module.css"

export default function Cartao() {
    return (
        <body className={style.cartao}>
            <div>
                <img  className={style.banner} src="./public/starWarsBanner.jpg" alt="Banner do filme star wars" />
            </div>

            <div className={style.descricao}>
                <h2 className={style.margem}>Pôster: Star Wars (1977)</h2>
                <p className={style.margem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi soluta magnam temporibus doloribus est, repellat eos nostrum esse! Earum porro cumque harum perspiciatis asperiores praesentium cum sunt. Eligendi, labore!</p>
                <Botao />
            </div> 
        </body>
    )
}