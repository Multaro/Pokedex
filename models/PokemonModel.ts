import { fetchPokemon } from '../utils/api';
import AbilityInterface from './AbilityInterface';
import GameIndiceInterface from './GameIndiceInterface';
import TypeInterface from './TypeInterface';
import SpritesInterface from './SpritesInterface'

export default class Pokemon {
    #id: number;
    #name: string;
    #photo: string;
    #height: number;
    #weight: number;
    #types: TypeInterface[];
    #abilities: AbilityInterface[];
    #gameIndices: GameIndiceInterface[];
    #sprites: SpritesInterface;

    constructor(pokedexId: number) {
        this.#id = pokedexId;        
        this.#name = '';
        this.#photo = '';
        this.#height = 0;
        this.#weight = 0;
        this.#types = [];
        this.#abilities = [];
        this.#gameIndices = [];
        this.#sprites = {
            back_default: '',
            back_female: '',
            back_shiny: '',
            back_shiny_female: '',
            front_default: '',
            front_female: '',
            front_shiny: '',
            front_shiny_female: '',
        };
    }

    async initialize() {
        try {
            const data = await fetchPokemon(this.#id);
            
            this.#name = data.name;
            this.#photo = data.sprites.front_default;
            this.#height = data.height;
            this.#weight = data.weight;
            this.#types = data.types;
            this.#abilities = data.abilities;
            this.#gameIndices = data.game_indices;
            this.#sprites = data.sprites;

        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    get id(): string {
        return 'Nº ' +'0'.repeat(4 - this.#id.toString().length) + this.#id;
    }

    get name(): string {
        return this.#name;
    }

    get photo(): string {
        return this.#photo;
    }

    get types(): TypeInterface[] {
        return this.#types;
    }

    get abilities(): AbilityInterface[] {
        return this.#abilities;
    }

    get gameIndices(): GameIndiceInterface[] {
        return this.#gameIndices;
    }

    get sprites(): SpritesInterface {
        return this.#sprites;
    }

    get height(): string {
        const heightString = this.#height.toString();
        if (heightString.length >= 2) {
            return (heightString.slice(0, -1) + ',' + heightString.slice(-1) + ' m');
        }

        return `0,${heightString} m`;
    }

    get weigth(): string {
        const heightWeight = this.#weight.toString();
        if (heightWeight.length >= 2) {
            return (heightWeight.slice(0, -1) + ',' + heightWeight.slice(-1) + ' kg');
        }

        return `0,${heightWeight} kg`;
    }
}