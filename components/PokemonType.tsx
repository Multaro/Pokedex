import styles from '../styles/PokemonType.module.css';
import { typeColors } from '../utils/TypeColors';

interface PokemonTypeProps {
    value: string;
}

export default function PokemonType(props: PokemonTypeProps): JSX.Element {
    const type = props.value;
    const color = (typeColors as { [key: string]: string })[type];

    return(
        <div className={styles.type} style={{backgroundColor: color}}>
            {type}
        </div>
    );
}