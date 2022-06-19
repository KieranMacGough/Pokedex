import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import '../styles/TypeBadge.css';

export default function TypeBadge(props) {


    return (
        <div className="typebadge" style={{backgroundColor: "var(--type-"+props.type}}>
            <img className="typebadge-icon" src={require(`../images/vectors/types/${props.type}.svg`)} style={{  color:"var(--text-white)"}}/>
            <p className="typebadge--name">{props.type}</p>
        </div>
    )
}