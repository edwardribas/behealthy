import { useState } from 'react';
import styles from './TreinoItem.module.scss';

export const TreinoItem = ({
    img,
    nome,
    series,
    repeticoes,
}) => {
    const [viewImage, setViewImage] = useState(false);
    const imageSource = img ? require(`../../../assets/img/treinos/${img}.jpg`) : "http://via.placeholder.com/150";

    return (
        <div>
            <div
                onClick={() => setViewImage(false)}
                className={viewImage && img ? `${styles.backdrop} ${styles.active}` : styles.backdrop}
            >
                <img
                    src={imageSource}
                    className={img && viewImage ? `${styles.active} ${styles.imgView}` : styles.imgView}
                />
            </div>
            <div className={styles.treinoItem}>
                <img
                    onClick={() => setViewImage(true)}
                    src={imageSource}
                    alt="Exercício"
                />

                <div>
                    <h5>{nome}</h5>
                    <p>{series} séries, {repeticoes} repetições</p>
                </div>
            </div>
        </div>
    )
}