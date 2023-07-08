import { useState } from 'react'
import styles from './seguir.module.css'

export default function BotaoSeguir() {

    const [textoSeguir , setTextoSeguir] = useState('Seguir')
    
    function seguir() {
        if(textoSeguir === "Seguir") {
            setTextoSeguir('Seguindo')
        } else {
            setTextoSeguir('Seguir')
        }
    }

    return (
        <button className={styles.seguir} onClick={seguir}>{textoSeguir}</button>
    )
}