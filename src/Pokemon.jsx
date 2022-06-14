import React from 'react';
import './App.css';


const Pokemon = ({ pokemon }) => {
    console.log(pokemon);
    let type = pokemon.types[0].type.name;

    const statsTable = pokemon.stats.map((stat) =>
        <tr>
            <td classsName="statNameColumn" style={{ textTransform: 'capitalize' }}>{stat.stat.name}</td>
            <td className="statValueColumn">{stat.base_stat}</td>
        </tr>
    )

    const abilities = pokemon.abilities.map((ability) => 
        <p style={{ textTransform: 'capitalize'}}>{ability.ability.name} {ability.is_hidden ? (<span className="isHidden">(Hidden)</span>) : ('')}</p>
    )

    return (
        <div className="Pokemon">
            <div className="infobox" style={{ 'background-color': "var(--" + pokemon.types[0].type.name + ")" }}>
                <div className="pokemonImages">
                <img className="pokemonImage" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <img className="pokemonImage" src={pokemon.sprites.back_default} alt={pokemon.name} />
                <img className="pokemonImage" src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                <img className="pokemonImage" src={pokemon.sprites.back_shiny} alt={pokemon.name} />
                </div>
                <div className="pokemonName" style={{ textTransform: 'capitalize', color: "var(--" + pokemon.types[0].type.name + ")" }}>
                    {pokemon.name}
                </div>
                <div className="pokemonTypeBox">
                    <h2>Type</h2>
                    <div className="pokemonTypes">
                        <div className="pokemonType" style={{ textTransform: 'capitalize', 'background-color': "var(--" + pokemon.types[0].type.name + ")" }}> <p>{pokemon.types[0].type.name}</p> </div>
                        {pokemon.types.length === 2
                            ? (<div className="pokemonType" style={{ textTransform: 'capitalize', 'background-color': "var(--" + pokemon.types[1].type.name + ")" }}> <p>{pokemon.types[1].type.name}</p></div>) : ('')}
                    </div>
                </div>
                <div className="statsAndAbilities">
                <div className="statsTable">
                    <table>
                        <tr>
                            <th>Stat</th>
                            <th>Base</th>
                        </tr>
                        {statsTable}
                    </table>
                </div>
                <div className="abilities">
                    <h2>Abilities</h2>
                        {abilities}
                </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}

export default Pokemon;