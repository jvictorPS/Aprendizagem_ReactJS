import styles from "./botao.module.css"
import PropTypes from "prop-types"

Botao.prototype = {
    link: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired
}

export default function Botao (props) {
    return (
        <button className={styles.botao}><a className={styles.link} href={props.link} target="_blank" rel="noopener noreferrer">{props.nome}</a></button>
    )
}