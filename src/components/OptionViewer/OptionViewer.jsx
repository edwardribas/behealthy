import styles from './OptionViewer.module.scss';

export const OptionViewer = ({
    title,
    options,
    currentOption,
    optionChangeHandler,
    className
}) => {

    if (!title)
        console.warn('OptionViewer: O título não está presente na chamada do componente.')

    if (!options.some(option => option === currentOption))
        throw new Error(`OptionViewer: Não existe a opção "${currentOption}" nas opções enviadas`);
    
    const changeHandler = (el, index) => {
        if (el === currentOption) return;
        optionChangeHandler(index)
    }
    
    return (
        <div className={className ? `${styles.optionViewer} ${styles.className}` : styles.optionViewer}>
            {title && (
                <h3>{title}</h3>
            )}


            {options.length && (
                <div className={styles.options}>
                    {options.map((el, index) => 
                        <span
                            className={el === currentOption ? styles.active : undefined}
                            key={index}
                            onClick={() => {
                                navigator.vibrate(20);
                                changeHandler(el, index);
                                window.scrollTo({
                                    left: 0,
                                    top: 75,
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            {el}
                        </span>
                    )}
                    <div className={styles.blur}>
                    </div>
                </div>
            )}
            
            <div className={styles.blur}>
            </div>
        </div>
    )
}