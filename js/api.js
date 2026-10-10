
const URL_API = 'https://pokeapi.co/api/v2/pokemon';

export async function obtenerPokemon(nombre) {
    try {
        if (!nombre) {
            throw new Error('Debe proporcionar el nombre de un Pokémon');
        }


        const nombreFormateado = nombre.trim().toLowerCase();


        const response = await fetch(`${URL_API}/${nombreFormateado}`);


        if (response.status === 404) {
            throw new Error(`El Pokémon "${nombre}" no existe (Error 404)`);
        }


        if (!response.ok) {
            throw new Error(`Error al consultar la PokéAPI: ${response.status}`);
        }


        const data = await response.json();


        return data;
    } catch (error) {
        console.error('Hubo un error al buscar el Pokémon:', error.message);
        return null;
    }
}


export const buscarPokemon = obtenerPokemon;

export const buscarPersonajes = obtenerPokemon;


