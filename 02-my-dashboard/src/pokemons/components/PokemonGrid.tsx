import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map(pokemon => (
                    // <Image 
                    //     key={x.id}
                    //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${x.id}.svg`}
                    //     width={100}
                    //     height={100}
                    //     alt={x.name}
                    // />
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                ))
            }
        </div>
    )
}