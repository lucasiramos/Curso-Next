import Image from "next/image"
import { FavoritePokemons, PokemonGrid } from "@/pokemons"

import { PokemonsResponse, SimplePokemon } from "@/pokemons"
import { IoHeartOutline } from "react-icons/io5"

export async function generateMetadata() {
    return {
        title: `Favoritos`,
        description: `Busca los pokemones`
    }
}

export default async function PokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Pokemos favoritos <small className="text-blue-500">Global State</small>
            </span>

            {/* <PokemonGrid pokemons={[]} /> */}

            <FavoritePokemons/>
        </div>
    )
}