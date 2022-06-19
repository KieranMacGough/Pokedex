import React, { useState, useEffect } from 'react';
import Pokedex from 'pokedex-promise-v2';
import TypeBadge from './TypeBadge';
import '../styles/App.css';
import '../styles/HomePokeCard.css';
import {ReactComponent as Pokeball} from '../images/vectors/patterns/Pokeball.svg';
import {ReactComponent as SixByThree} from '../images/vectors/patterns/6x3.svg'

export default function HomePokeCard(props) {
    const P = new Pokedex();
    const [pokemon, setPokemon] = useState('');
    const [formattedId, setFormattedId] = useState('');

    useEffect(() => {
        searchPokemon(props.name);
     }, [])

    const searchPokemon = async (name) => {
        console.log("Attempt Search");
        P.getPokemonByName([name]) // with Promise
            .then((response) => {
                setPokemon(response);
                setFormattedId(formatId(response[0].id));
            // console.log("Pokemon is set to " + response[0].name);
            })
            .catch((error) => {
                console.log('There was an ERROR: ', error);
            });
    }

    function formatId(id) {
        var num = '' + id;
        while (num.length < 3){
            num = '0' + num;
        }
        num = '#'+num;
        return num;
    }
    return (
        <div className="HomePokeCard">
        {pokemon !== "" && 
            <div className="card" style={{backgroundColor: "var(--background-type-"+pokemon[0].types[0].type.name+")",   boxShadow: "0px 10px 20px var(--background-type-"+pokemon[0].types[0].type.name+")"}}>
            <div className="card-pokeball">
                <Pokeball fill='url(#Gradient)' width='145px' height='145px' />
            </div>
            <div className="card-sixbythree">
                <SixByThree fill='url(#Gradient)' width='74px' height='32px' />
            </div>
            <img className="card-img" src={pokemon[0].sprites.other["official-artwork"].front_default} />
            
            <div className="card-data">
                <p className="card-id">{formattedId}</p>
                <p className="card-name">{pokemon[0].name}</p>
                <div className="card-types">
                    <TypeBadge type={pokemon[0].types[0].type.name} />
                    {pokemon[0].types.length === 2 && 
                    <TypeBadge type={pokemon[0].types[1].type.name} />
                    }
                </div>
            </div>
            
        </div>
        }
        {pokemon === "" && ''}
    </div>
    )
}