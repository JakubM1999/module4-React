import React from 'react'

const container = {
    textAlign:"center"

}

const h2Style = {
    color: "Black",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "300",
    fontSize:"20pt"
};

export default function pokemonList({pokemon}) {
    return (
        <div style={container}>
            {pokemon.map(p => (
                <h2 style={h2Style} key={p}>{p}</h2>
            ))}
        </div>
    )
}
