const url = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = async (pokemonId: number) => {
    try {
        const response = await fetch(`${url}${pokemonId}/`);
    
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }   
    
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
};