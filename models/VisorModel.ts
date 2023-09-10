import PokemonModel from './PokemonModel';

export default class VisorModel {
    #indexX: number;
    #indexY: number;
    #select: boolean;

    #pokemon: PokemonModel | null = null;
    static #indexXLimit: number = 1009;
    static #indexYLimit: number = 1;

    constructor(indexX: number, indexY: number, select = false, pokemon: PokemonModel | null = null) {
        this.#indexX = indexX;
        this.#indexY = indexY;
        this.#select = select;
        this.#pokemon = pokemon;
    }

    get indexX(): number {
        return this.#indexX;
    }

    get indexY(): number {
        return this.#indexY;
    }

    get isSelect(): boolean {
        return this.#select;
    }

    get pokemon(): PokemonModel | null {
        return this.#pokemon;
    }

    async initialize(): Promise<boolean> {
        const newPokemon = new PokemonModel(this.indexX);
        this.#pokemon = newPokemon;

        try {
            await newPokemon.initialize();
            return true;

        } catch (error) {
            console.error('Erro na inicialização do Pokémon:', error);
            return false;
        }
      }

    changeVisor(direction: string): VisorModel {
        let newIndexX = this.#indexX;
        let newIndexY = this.#indexY;
        

        if (direction === 'Select') {
            return new VisorModel(0, 0, !this.#select);
        }

        if (direction === 'Right' && newIndexX <= VisorModel.#indexXLimit) {
            newIndexX++;
        } else if (direction === 'Left' && newIndexX > 0) {
            newIndexX--;
        } else if (direction === 'Up' && newIndexY > 0) {
            newIndexY--;
        } else if (direction === 'Down' && newIndexY <= VisorModel.#indexYLimit) {
            newIndexY++;
        }

        if (direction === 'Up' || direction === 'Down') {
            const pokemon = this.#pokemon;
            return new VisorModel(newIndexX, newIndexY, this.#select, pokemon);
        }

        return new VisorModel(newIndexX, 0, this.#select);
        
    }

    changeVisorBySearch(pokemonId: number): VisorModel {
        return new VisorModel(pokemonId, 0, false);
    }
}
    

