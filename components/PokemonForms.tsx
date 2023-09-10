import styles from '../styles/PokemonForms.module.css';
import SpritesInterface from '../models/SpritesInterface';

interface PokemonFormsProps {
    sprites: SpritesInterface;
}

export default function PokemonForms(props: PokemonFormsProps): JSX.Element {
    const forms = props.sprites;
    const renderFemale = (forms.front_female && forms.front_shiny_female);
    
    return (
        <div className={styles.pokemonData}>
            <div className={styles.genders}>
                <div className={styles.genderContainer}>
                    <span>♂</span>
                    <img src={forms.front_default} />
                    <img src={forms.front_shiny} />
                </div>
            </div>

            {renderFemale ?
                <div className={styles.genders}>
                    <div className={styles.genderContainer}>
                        <span>♀</span>
                        <img src={forms.front_female} />
                        <img src={forms.front_shiny_female} />
                    </div>
                </div>
                : <></>
            }            
        </div>
    );
}

/*


<img src={forms.back_default} />
            <img src={forms.back_female} />

            <img src={forms.back_shiny} />
            <img src={forms.back_shiny_female} />

            <img src={forms.front_default} />
            <img src={forms.front_female} />

            <img src={forms.front_shiny} />
            <img src={forms.front_shiny_female} />

            */