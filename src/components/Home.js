import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Pokemon from './Pokemon';
import IconSearch from '../images/vectors/icons/Search.svg';
import Pokedex from 'pokedex-promise-v2';
import generation from '../images/vectors/icons/Generation.svg';
import sort from '../images/vectors/icons/Sort.svg';
import filter from '../images/vectors/icons/Filter.svg';
import HomePokeCard from "./HomePokeCard.js";

const Home = () => {
    const P = new Pokedex();
    const [pokemon, setPokemon] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [fullPokemonList, setFullPokemonList] = useState('');
    const [displayedPokemonList, setDisplayedPokemonList] = useState('');
    let monElements = '';

    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //         searchPokemon(searchTerm)
    //     }
    // }
    
    // const searchPokemon = async (name) => {
    //     P.getPokemonByName([name.toLowerCase()]) // with Promise
    //     .then((response) => {
    //         console.log(response);
    //         setPokemon(response[0]);
    //     })
    //     .catch((error) => {
    //         console.log('There was an ERROR: ', error);
    //     });
    // }
    
    const interval = {
        limit: 10,
        offset: 0
    }

    useEffect(() => {
        P.getPokemonsList(interval)
            .then((response) => {
                setFullPokemonList(response.results.map(mon => {
                    return <HomePokeCard name={mon.name} />
            }))
            console.log(fullPokemonList);
        })

    }, []);

    useEffect(() => {
        try {
            setDisplayedPokemonList(fullPokemonList.map(mon => {
            if (searchTerm.length <= 2) {
                return <HomePokeCard name={mon.props.name} />
            }
            if (searchTerm.length > 2 && mon.props.name.includes(searchTerm)) {
                return <HomePokeCard name={mon.props.name} />
            }
        }))
    }
    catch {
        P.getPokemonsList(interval)
            .then((response) => {
                setDisplayedPokemonList(response.results.map(mon => {

                    return <HomePokeCard name={mon.name} />
            }))
    })
    
    }
    }, [searchTerm]);

    // useEffect(() => {
    //     if (searchTerm != "" && searchTerm.length > 2) {
    //         console.log(fullPokemonList);
    //         fullPokemonList.map(mon => {
    //             if (mon.props.name.includes(searchTerm)) {

    //                 return <HomePokeCard name={mon.name} />
    //             }
    //         })
    //         console.log(searchTerm);
    //         console.log(searchedPokemonList);
    //     }
    // }, [searchTerm]);

    

    return (
        <div className="Home">
            <div className="nav">
                <img className="nav--generation" src={generation} alt="generation"/>
                <img className="nav--sort" src={sort} alt="sort"/>
                <img className="nav--filter" src={filter} alt="filter"/>
            </div>

            <div className="title">
                <p className="title--text">Pokédex</p>
                <p className="title--description">Search for Pokémon by name or using the National Pokédex number.</p>
            </div>

            <div className="search">
                    <img className="search--icon" src={IconSearch} alt="Search" />
                    <input
                        className="search--input"
                        placeholder="What Pokémon are you looking for?"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
            </div>

            <div className="monlist">
                {displayedPokemonList} 
            </div> 
        </div>
    )
}

export default Home;