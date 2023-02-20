import styles from './Titulo.module.scss';

export const Titulo = ({titulo, className}) => {
    
    if (!titulo)
        console.warn('Propriedade `titulo` está faltando no componente.')
    
    return (
        titulo && (
            <h2 className={className ? `${styles.className} ${styles.titulo}` : styles.titulo}>
                {titulo}
            </h2>
        )
    )
}