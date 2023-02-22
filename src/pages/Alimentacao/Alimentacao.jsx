import styles from './Alimentacao.module.scss';
import { Container } from '../../components/Container/Container';
import { Titulo } from '../../components/Titulo/Titulo';
import { useState } from 'react';
import alimentacaoJson from './Alimentacao.json';
import { OptionViewer } from '../../components/OptionViewer/OptionViewer';

const initialState = {
    show: false,
    nome: '',
    quantidade: '',
    ingredientes: [],
}

const AlimentacaoItem = ({
    prato,
    setInfo
}) => {
    return (
        <div
            className={styles.alimentacaoItem}
            onClick={() => {
                navigator.vibrate(20);
                setInfo({
                    show: true,
                    toggleShow: setInfo,
                    prato
                })}
        }
        >
            {prato.img && (
                <img
                    src={require(`../../assets/img/refeicoes/${prato.img}.jpg`)}
                    alt="Refeição"
                />
            )}
            <h2>{prato.nome || 'Prato sem nome'}</h2>
            <div className={styles.blur}></div>
        </div>
    )
}

const AlimentacaoInfoModal = ({
    show,
    toggleShow,
    prato
}) => {
    
    return (
        <div
            className={show ? `${styles.alimentacaoModal} ${styles.active}` : styles.alimentacaoModal}
            onClick={() => {
                toggleShow(initialState);
                navigator.vibrate(20);
            }}
        >
            {prato && (
                <p>{prato.nome}</p>
            )}
        </div>
    )
}

export const Alimentacao = () => {
    const refeicoes = [
        'Café da manhã', 'Lanche da manhã',
        'Almoço', 'Lanche da tarde',
        'Jantar', 'Lanche da noite'
    ];

    const [clickedRefeicaoInfo, setClickedRefeicaoInfo] = useState(initialState)
    const [refeicaoIndex, setRefeicao] = useState(0)
    const refeicaoInfo = alimentacaoJson[refeicaoIndex]?.pratos;

    return (
        <Container className={styles.container}>
            <Titulo titulo='Alimentação'/>

            <OptionViewer
                title="Refeição"
                options={refeicoes}
                currentOption={refeicoes[refeicaoIndex]}
                optionChangeHandler={setRefeicao}
            />

            <AlimentacaoInfoModal
                show={clickedRefeicaoInfo.show}
                toggleShow={setClickedRefeicaoInfo}
                nome={clickedRefeicaoInfo.nome}
                quantidade={clickedRefeicaoInfo.quantidade}
                ingredientes={clickedRefeicaoInfo.ingredientes}
            />

            <div className={styles.wrapper}>
                <div className={styles.alimentos}>
                    {refeicaoInfo?.length > 0 && (
                        refeicaoInfo.map((prato, i) => (
                            <AlimentacaoItem
                                key={i}
                                setInfo={setClickedRefeicaoInfo}
                                prato={prato}
                            />
                        ))
                    )}
                </div>
            </div>

        </Container>
    )
}