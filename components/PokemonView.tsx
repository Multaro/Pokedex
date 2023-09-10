import styles from '../styles/PokemonView.module.css';
import PokemonModel from '../models/PokemonModel';

interface PokemonViewProps {
    pokemon: PokemonModel;
    loading: boolean;
}

export default function PokemonView(props: PokemonViewProps): JSX.Element {
    const { pokemon, loading } = props;

    const loadingPhoto = loading ?
     'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngplay.com%2Fwp-content%2Fuploads%2F2%2FPokeball-PNG-Photo-Image.png&f=1&nofb=1&ipt=17fc1cc0ad35d0ed369ad75a0f03f9839d53f031f0cc7b394ab29702e0a38a62&ipo=images' : pokemon.photo; 
        
    const loadingString = loading ? styles.loading : '';

    return (
        <>
            <div className={styles.pokemonData}>
                <img className={styles.photo} src={loadingPhoto} />          
            </div>
            <div className={styles.pokemonDataFooter}>
                <div className={`${styles.pokemonNumber} ${loadingString}`}>{pokemon.id}</div>
                <div className={`${styles.pokemonName} ${loadingString}`}>{pokemon.name}</div>
                <li>
                    <span className={styles.listName}>Altura: </span>
                    <span className={`${styles.listValue} ${loadingString}`}>{pokemon.height}</span>
                </li>
                <li>
                    <span className={styles.listName}>Peso: </span>
                    <span className={`${styles.listValue} ${loadingString}`}>{pokemon.weigth}</span>
                </li>
            </div>
        </>
    );
}