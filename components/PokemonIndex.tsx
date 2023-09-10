import styles from '../styles/PokemonIndex.module.css';

export default function PokemonIndex(props: any) {
    return (
        <div className={styles.pokemonData}>
            <div className={styles.dataTitle}>
                <h1>#Pokédex</h1>
            </div>
            <div className={styles.dataFooter}>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000marken.net%2Fwp-content%2Fuploads%2F2021%2F01%2Flogo-Pokemon.png&f=1&nofb=1&ipt=6ae5738464af4d700b39f06367f41b37c8d8a8527b6f55c283385d524c8c137b&ipo=images' loading='lazy' />
                <a href='https://github.com/Multaro'>Multaro</a>
            </div>
        </div>
    );
}