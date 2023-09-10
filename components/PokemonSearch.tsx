import styles from '../styles/PokemonSearch.module.css';
import { generateSearchList } from '../utils/GenerateSearchList';

interface PokemonSearchProps {
    onChange(searchSelect: number): void;
}

export default function PokemonSearch(props: PokemonSearchProps): JSX.Element {

    function renderList() {
        const list = generateSearchList(1010);
        return list.map(e => 
            <div key={e} onClick={() => props.onChange(e)} className={styles.searchItem}>
                <span>{e}</span>
            </div>);
    }

    return (
        <div className={styles.pokemonData}>
            <div className={styles.search}>
                {renderList()}
            </div>
        </div>
    );
}
