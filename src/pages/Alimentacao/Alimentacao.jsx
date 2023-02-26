import styles from './Alimentacao.module.scss';
import { Container } from '../../components/Container/Container';
import { Titulo } from '../../components/Titulo/Titulo';
import { useState } from 'react';
import refeicoesJSON from './Alimentacao.json';
import { OptionViewer } from '../../components/OptionViewer/OptionViewer';

const modalInitialState = {
    showModal: false,
    refeicaoAtual: '',
    pratoInfo: {
        nome: '',
        quantidade: '',
        ingredientes: [],
    }
}

const refeicoes = [ 'Café da manhã', 'Lanche da manhã', 'Almoço', 'Lanche da tarde', 'Janta', 'Lanche da noite' ];

const AlimentacaoItem = ({
    pratoInfo,
    setModalInfo
}) => {
    return (
        <div
            className={styles.alimentacaoItem}
            onClick={() => {
                navigator.vibrate(20);
                setModalInfo({
                    showModal: true,
                    alternarShowModal: setModalInfo,
                    pratoInfo
                })}
        }
        >
            <img
                src={pratoInfo.img
                    ? require(`../../assets/img/refeicoes/${pratoInfo.img}.jpg`)
                    : 'https://media.discordapp.net/attachments/946460608839184466/1079435918815023194/image.png?width=1193&height=671'
                }
                alt="Refeição"
            />
            <h2>{pratoInfo.nome || 'Prato sem nome'}</h2>
            <div className={styles.blur}></div>
        </div>
    )
}

const AlimentacaoInfoModal = ({
    showModal,
    alternarShowModal,
    refeicaoAtual,
    pratoInfo
}) => {
    return (
        <div
            className={showModal
                ? `${styles.alimentacaoModal} ${styles.active}`
                : styles.alimentacaoModal
            }
        >
            <div className={styles.modalWrapper}>
                <h2>{pratoInfo.nome}</h2>

                <div className={styles.info}>
                    <span>{refeicaoAtual}</span>
                    <span>
                        Quantidade: {pratoInfo.quantidade ? pratoInfo.quantidade : "Indefinida"}
                    </span>
                </div>

                {pratoInfo?.ingredientes?.length > 0 && (
                    <>
                        <h2>Ingredientes</h2>
                    
                        <ul>
                            {pratoInfo.ingredientes.map((ingrediente, i) => (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <button
                    onClick={() => {
                        alternarShowModal({
                            show: false,
                            refeicaoAtual,
                            pratoInfo
                        });

                        navigator.vibrate(20);
                    }}
                >
                    Fechar
                </button>
            </div>
        </div>
    )
}

export const Alimentacao = () => {
    const [modalRefeicaoInfo, setModalRefeicaoInfo] = useState(modalInitialState);
    const [refeicaoAtualIndex, setRefeicaoAtualIndex] = useState(0);
    const refeicaoAtual = refeicoesJSON[refeicaoAtualIndex]?.pratos;

    return (
        <Container className={styles.container}>
            <Titulo titulo='Alimentação'/>

            <OptionViewer
                title="Refeição"
                options={refeicoes}
                currentOption={refeicoes[refeicaoAtualIndex]}
                optionChangeHandler={setRefeicaoAtualIndex}
            />

            <AlimentacaoInfoModal
                showModal={modalRefeicaoInfo.showModal}
                pratoInfo={modalRefeicaoInfo.pratoInfo}
                alternarShowModal={setModalRefeicaoInfo}
                refeicaoAtual={refeicoes[refeicaoAtualIndex]}
            />

            <div className={styles.wrapper}>
                <div className={styles.alimentos}>
                    {refeicaoAtual?.length > 0 && (
                        refeicaoAtual.map((pratoInfo, i) => (
                            <AlimentacaoItem
                                key={i}
                                setModalInfo={setModalRefeicaoInfo}
                                pratoInfo={pratoInfo}
                            />
                        ))
                    )}
                </div>
            </div>

        </Container>
    )
}