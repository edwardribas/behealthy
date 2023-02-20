import styles from './NotFound.module.scss';

export const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <h1>404</h1>
            <p>A página que você buscou não existe.</p>
        </div>
    )
}