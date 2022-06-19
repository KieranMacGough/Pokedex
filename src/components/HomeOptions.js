import React, { useState, useEffect } from 'react';
import Pokedex from 'pokedex-promise-v2';
import TypeBadge from './TypeBadge';
import '../styles/App.css';
import '../styles/HomeOptions.css';
import {ReactComponent as SixByThree} from '../images/vectors/patterns/6x3.svg'

export default function HomeOptions(props) {
    console.log(props.option);
    return (
        <div>
            {props.option === "generation" &&
                <div className="HomeOptions">
                    <div className="home-options-window">
                        <p>Hello {props.option}!</p>
                    </div>
                </div>
            }
        </div>
    )
}