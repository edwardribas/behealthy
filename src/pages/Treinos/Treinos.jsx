import styles from './Treinos.module.scss';
import { Container } from '../../components/Container/Container';
import { Titulo } from '../../components/Titulo/Titulo';
import { useState } from 'react';
import treinosJson from './Treinos.json';
import { OptionViewer } from '../../components/OptionViewer/OptionViewer';

const TreinoItem = ({
    img,
    nome,
    series,
    repeticoes,
}) => {
    return (
        <div className={styles.treinoItem}>
            <img src={img} alt="Exercício"/>

            <div>
                <h5>{nome}</h5>
                <p>{series} séries, {repeticoes} repetições</p>
            </div>
        </div>
    )
}

export const Treinos = () => {
    const treinos = ['Treino A', 'Treino B', 'Treino C', 'Treino D', 'Treino E', 'Treino F'];
    const [treinoIndex, setTreino] = useState(0)
    const treinoInfo = treinosJson[treinoIndex];

    return (
        <Container className={styles.container}>
            <Titulo titulo='Treinos'/>

            <OptionViewer
                title="Treino de hoje"
                options={treinos}
                currentOption={treinos[treinoIndex]}
                optionChangeHandler={setTreino}
            />

            <div className={styles.treinosWrapper}>
                {treinoInfo.treinos.map((treino, i) => (
                    <TreinoItem
                        key={i}
                        img={treino.img}
                        nome={treino.nome}
                        series={treino.series}
                        repeticoes={treino.repeticoes}
                    />
                ))}
            </div>

        </Container>
    )
}