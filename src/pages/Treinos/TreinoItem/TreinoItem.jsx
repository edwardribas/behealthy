import { useState } from 'react';
import styles from './TreinoItem.module.scss';

export const TreinoItem = ({
    img,
    nome,
    series,
    tempo,
    repeticoes,
}) => {
    const [viewImage, setViewImage] = useState(false);
    const imageSource = img ? require(`../../../assets/img/treinos/${img}.jpg`) : "http://via.placeholder.com/150";

    return (
        <div>
            <div
                onClick={() => {
                    navigator.vibrate(20)
                    setViewImage(false)
                }}
                className={viewImage && img ? `${styles.backdrop} ${styles.active}` : styles.backdrop}
            >
                <img
                    src={imageSource}
                    className={img && viewImage ? `${styles.active} ${styles.imgView}` : styles.imgView}
                    alt="Exercício"
                />
            </div>
            <div className={styles.treinoItem}>
                <img
                    onClick={() => {
                        navigator.vibrate(20)
                        setViewImage(true)
                    }}
                    src={imageSource}
                    alt="Exercício"
                />

                <div>
                    <h5>{nome}</h5>
                    <p>
                        {(series && repeticoes && !tempo)
                            ? `${series} séries, ${repeticoes} repetições`
                            : `Duração: ${tempo}`
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}