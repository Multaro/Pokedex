import styles from '../styles/Visor.module.css';
import VisorModel from '../models/VisorModel';
import PokemonView from './PokemonView';
import PokemonStatus from './PokemonStatus';
import PokemonForms from './PokemonForms';
import PokemonSearch from './PokemonSearch';
import PokemonIndex from './PokemonIndex';

interface VisorProps {
    value: VisorModel;
    loading: boolean;
    onChange(searchSelect: number): void;
}

export default function Visor(props: VisorProps): JSX.Element {
    const { value, loading }  = props;
    const pokemon = value.pokemon;

    const isSelect = value.isSelect;
    const abilities = pokemon?.abilities;
    const gameIndices = pokemon?.gameIndices;
    const types = pokemon?.types;
    const sprites = pokemon?.sprites;


    const renderIndex = (): JSX.Element => <PokemonIndex />;

    const renderPokemonInfos = (): JSX.Element => pokemon ? 
        <PokemonView pokemon={pokemon} loading={loading} /> : <></>;

    const renderPokemonMore = (): JSX.Element => (abilities && gameIndices && types) ? 
        <PokemonStatus abilities={abilities} gameIndices={gameIndices} types={types} /> : <></>;

    const renderPokemonForms = (): JSX.Element => sprites ? 
        <PokemonForms sprites={sprites} /> : <></>;

    const renders = [renderPokemonInfos(), renderPokemonMore(), renderPokemonForms()]

    return (
        <div className={styles.visor}>
            {isSelect ? <PokemonSearch onChange={(number) => props.onChange(number)} /> : value.indexX > 0 ? renders[value.indexY] : renderIndex()}
        </div>
    );
}