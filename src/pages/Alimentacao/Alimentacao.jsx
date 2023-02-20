import styles from './Alimentacao.module.scss';
import { Container } from '../../components/Container/Container';
import { Titulo } from '../../components/Titulo/Titulo';
import { useState } from 'react';
import alimentacaoJson from './Alimentacao.json';
import { OptionViewer } from '../../components/OptionViewer/OptionViewer';

const AlimentacaoItem = ({
}) => {
    return (
        <div className={styles.alimentacaoItem}>

        </div>
    )
}

export const Alimentacao = () => {
    const refeicoes = [
        'Café da manhã', 'Lanche da manhã',
        'Almoço', 'Lanche da tarde',
        'Jantar', 'Lanche da noite'
    ];
    const [refeicaoIndex, setRefeicao] = useState(0)
    // const refeicaoInfo = alimentacaoJson[refeicaoIndex];

    return (
        <Container className={styles.container}>
            <Titulo titulo='Alimentação'/>

            {/* <OptionViewer
                title="Refeição"
                options={refeicoes}
                currentOption={refeicoes[treinoIndex]}
                optionChangeHandler={setRefeicao}
            /> */}

            <div className={styles.alimentacaoWrapper}>
            </div>

        </Container>
    )
}