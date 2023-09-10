import styles from '../styles/Controller.module.css';

interface Controller {
    isSelect: boolean;
    onChange: (direction: string) => void;
}

export default function Controller(props: Controller): JSX.Element {
    const press = props.isSelect ? styles.select : '';

    function buttonClick(direction: string) {props.onChange(direction)}

    return (
        <div className={styles.controller}>
            <div className={`${styles.arrow} ${styles.arrowTop}`} onClick={() => buttonClick('Up')}/>
            <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => buttonClick('Right')}/>
            <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => buttonClick('Left')}/>
            <div className={`${styles.arrow} ${styles.arrowBottom}`} onClick={() => buttonClick('Down')}/>
            <div className={`${styles.enter} ${press}`} onClick={() => buttonClick('Select')} />
        </div>
    );
}