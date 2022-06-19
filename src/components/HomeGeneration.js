import React, { useState, useEffect } from 'react';
import Pokedex from 'pokedex-promise-v2';
import TypeBadge from './TypeBadge';
import '../styles/App.css';
import '../styles/HomeGeneration.css';
import {ReactComponent as SixByThree} from '../images/vectors/patterns/6x3.svg'

export default function HomeGenerations(props) {

    return (
    <div className="HomeGenerations">
        <p>Hello Generations!</p>
    </div>
    )
}