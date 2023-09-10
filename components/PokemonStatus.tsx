import styles from '../styles/PokemonStatus.module.css';
import AbilityInterface from '../models/AbilityInterface';
import GameIndiceInterface from '../models/GameIndiceInterface';
import TypeInterface from '../models/TypeInterface';
import PokemonType from './PokemonType';
import { useState } from 'react';

interface PokemonStatusProps {
    abilities: AbilityInterface[];
    gameIndices: GameIndiceInterface[];
    types: TypeInterface[];
}

export default function PokemonStatus(props: PokemonStatusProps): JSX.Element {
    const { abilities, gameIndices, types } = props;
    const[tip, setTip] = useState<boolean>(false);
    
    const changeTip = () => setTip(!tip);
    
    const renderAbilities = () => {
        return abilities.map((ability: AbilityInterface) => 
            <div key={ability.slot}
                className={styles.ability}
                style={{flexDirection: ability.is_hidden? 'row' : 'column'}}
            >
                {(ability.is_hidden) ?
                    <div 
                        className={styles.hiddenAbility}
                        onMouseEnter={() => changeTip()} onMouseLeave={() => changeTip()}
                    >
                        <span>?</span>
                    </div> 
                    : ''}
                {ability.ability.name}
            </div>  
        );
    }

    const renderGameIndices = () => {
        return gameIndices.map((game: GameIndiceInterface) => <li key={game.version.name}>{game.version.name}</li>);
    }

    const renderTypes = () => {
        return  types.map((type: TypeInterface) => <PokemonType key={type.slot} value={type.type.name} />)
    }

    return (
        <div className={styles.pokemonData}>
            <div className={styles.infos}>
                <label>HABILIDADES</label>
                <div className={styles.abilities}>
                    {renderAbilities()}
                </div>

                <div className={styles.games}>
                    <label>JOGOS</label>
                    <ul>
                        {renderGameIndices()}
                    </ul>
                </div>
            </div>
            <div className={styles.types}>
                <label>TIPOS</label>
                <div className={styles.typesContent}>
                    {renderTypes()}
                </div>
            </div>
            <span className={styles.tip}>{tip ? 'Hidden Ability' : ''}</span>
        </div>  
    );
}