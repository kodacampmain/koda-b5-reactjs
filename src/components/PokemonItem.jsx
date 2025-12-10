import { useSelector } from "react-redux";

function PokemonItem({ pokemon }) {
  const typeState = useSelector((state) => state.pokemon.types);
  const getTypeImg = (typeName) => {
    for (let type of typeState) {
      if (type.name === typeName) {
        return type.img;
      }
    }
  };
  return (
    <article className="bg-asap h-75 cursor-pointer rounded-md p-5">
      <header className="text-center text-2xl font-bold capitalize">
        {pokemon.name}
      </header>
      <div className="flex h-5/10 items-center justify-center">
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
      <div className="flex flex-col items-center gap-2">
        {pokemon.types.map((type, idx) => {
          return (
            <div key={idx}>
              <img src={getTypeImg(type.name)} alt={type.name} />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default PokemonItem;
