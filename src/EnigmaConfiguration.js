import React from 'react'
import { useState } from 'react';

export default function EnigmaConfiguration({reflector, rotor1, rotor2, rotor3}) {
    return ( 
    <div className="configurationInfo">
        <h2>The Enigma Configuration </h2>
        <form>
            <label>
            Rotor1
            <textarea value={rotor1} rows="1" cols="70" readOnly="{true}"/>  
            </label>
            <br />
            <label>
            Rotor2
            <textarea value={rotor2} rows="1" cols="70" readOnly="{true}"/> 
            </label>
            <br /> 
            <label>
            Rotor3
            <textarea value={rotor3} rows="1" cols="70" readOnly="{true}"/> 
            </label>
            <br />
            <label>
            Reflector
            <textarea value={reflector} rows="1" cols="70" readOnly="{true}"/> 
            </label>
            
        </form>
    </div>
    );
}