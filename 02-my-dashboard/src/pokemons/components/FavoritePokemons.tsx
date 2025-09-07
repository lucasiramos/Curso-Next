'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useState } from "react"
import { IoHeartOutline } from "react-icons/io5"

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))

    const [stPokemons, setPokemons] = useState(favoritePokemons)

    console.log(favoritePokemons)

    return (
        <>
            {
                stPokemons.length > 0 ?
                    <PokemonGrid pokemons={stPokemons } />

                :
                    <NoFavorites />
            }
        </>

    )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}