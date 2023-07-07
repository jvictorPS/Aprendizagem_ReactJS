import Botao from "../Botao"
import Foto from "../Foto"
import fotoPerfil from "../../assets/foto.jpeg"
import Informativo from "../Informativo"
import Nome from "../Nome"
import styles from "./cartao.module.css"
import BotaoSeguir from "../BotaoSeguir"

export default function Cartao() {
    return (
        <div className={styles.cartao}>
            <Foto foto={fotoPerfil}/>
            <div className={styles.containerNome}>
                <Nome nome='João Victor'/>
                <BotaoSeguir />
            </div>
            
            <Informativo informacao='Desenvolvedor Front-End Web' />
            <Informativo informacao='71 99999-9999'/>
            <Informativo informacao='x.xxxxxx@xxxxx.com'/>
            
            <div className={styles.botoes}>
                <Botao nome="GitHub" link='https://github.com/jvictorPS'/>
                <Botao nome='Linkedin' link='https://www.linkedin.com/in/joaovictorps/'/>
                <Botao nome='Teste' />
            </div>
        </div>
    )
}