import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import PokemonItem from "../components/PokemonItem";
import { pokemonActions } from "../redux/slices/pokemon.slice";

// const pokemons = [
//   {
//     name: "electrode",
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/101.png",
//     types: [
//       {
//         name: "electric",
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/13.png",
//       },
//     ],
//   },
//   {
//     name: "exeggutor",
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/103.png",
//     types: [
//       {
//         name: "grass",
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png",
//       },
//       {
//         name: "psychic",
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/14.png",
//       },
//     ],
//   },
// ];

function Pokemons() {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);
  useEffect(() => {
    dispatch(pokemonActions.getPokemonThunk());
    dispatch(pokemonActions.getTypeThunk());
  }, []);
  return (
    <main className="relative grid min-h-screen grid-cols-2 gap-3 bg-cyan-600 p-5 md:grid-cols-3 lg:grid-cols-4">
      {pokemonState.fetchStatus.pokemon.isLoading ||
      pokemonState.fetchStatus.type.isLoading ? (
        <Loader className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      ) : (
        pokemonState.pokemons.map((pokemon) => {
          return <PokemonItem pokemon={pokemon} key={pokemon.id} />;
        })
      )}
    </main>
  );
}

export default Pokemons;
