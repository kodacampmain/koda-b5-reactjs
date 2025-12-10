import fetchUrl from "../utils/fetch";

export const getPokemonData = async (url) => {
  const pokemonData = await fetchUrl(url);
  const result = pokemonData.results.map(async (pokemon, idx) => {
    const obj = {
      name: pokemon.name,
    };
    try {
      const pokemonDetail = await fetchUrl(pokemon.url);
      Object.assign(obj, { id: pokemonDetail.id });
      Object.assign(obj, { img: pokemonDetail.sprites.front_shiny });
      const pokemonTypes = pokemonDetail.types.map((typeItem) => {
        return { name: typeItem.type.name };
      });
      Object.assign(obj, {
        types: pokemonTypes,
      });
    } catch (err) {
      const error = new Error(
        `Error Fetching Pokemon Detail at index ${idx}\n${err.status}: ${err.statusText}`,
      );
      throw error;
    }
    return obj;
  });
  return await Promise.all(result);
};

export const getPokemonType = async (url) => {
  const pokemonType = await fetchUrl(url);
  const result = pokemonType.results.map(async (type, idx) => {
    const obj = {
      name: type.name,
    };
    try {
      const typeDetail = await fetchUrl(type.url);
      Object.assign(obj, {
        img: typeDetail.sprites["generation-viii"]["sword-shield"].name_icon,
      });
    } catch (err) {
      const error = new Error(
        `Error Fetching Type at index ${idx}\n${err.status}: ${err.statusText}`,
      );
      throw error;
    }
    return obj;
  });
  return await Promise.all(result);
};
