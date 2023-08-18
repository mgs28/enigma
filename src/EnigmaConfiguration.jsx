import React from 'react'
import { useState } from 'react';
import { RotorA, RotorB, RotorC, RotorD, RotorReflector} from './constants';

export default function EnigmaConfiguration({reflector, rotor1, rotor2, rotor3}) {
    return ( 
    <div className="configurationInfo">
        <h2>The Enigma Configuration </h2>
        <form>
            <label>
                Rotor1 Configuration:
                <select defaultValue="D" >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </label>
            <label>
                Rotor1 Offset:
                <select defaultValue="0" >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>                
            </label>            
        </form>
    </div>
    );
}