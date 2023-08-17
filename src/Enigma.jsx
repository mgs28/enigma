import React from 'react'
import { useState } from 'react';
import EnigmaConfiguration from './EnigmaConfiguration';
import { Reflector } from './Reflector';
import { Keypad } from './Keypad';
import { Rotor } from './Rotor';
import {IOBuffers} from './IOBuffers' 

import { rotate_rotor, character_to_idx, inverse_cipher, index_to_character } from './utilities';
import { letters_index, qwerty } from './constants';
 
export default function Enigma() {

  function handleLetterClick(i){

    setInput(i);

    let rotor1_curr = rotor1.slice();
    let rotor2_curr = rotor2.slice();
    let rotor3_curr = rotor3.slice();

    //rotate if we need to
    if(inputBuff.length > 0) {
      rotor1_curr = rotate_rotor(rotor1);
      setRotor1(rotor1_curr); 

      if(inputBuff.length % 26 == 0){
        console.log("rotate second rotor");
        rotor2_curr = rotate_rotor(rotor2);
        setRotor2(rotor2_curr);
      }

      if(inputBuff.length % 676 == 0){
        rotor3_curr = rotate_rotor(rotor3);
        setRotor3(rotor3_curr);
      }
    }

    //remember to make the data updates immutable. 
    const nextRotorsIO1 = rotorIO1.slice();
    const nextRotorsIO2 = rotorIO2.slice();
    const nextRotorsIO3 = rotorIO1.slice();
    const nextReflectorIO = reflectorIO.slice();
    const input_idx = character_to_idx(i);

    nextRotorsIO1[0] = input_idx;
    nextRotorsIO1[1] = rotor1_curr[nextRotorsIO1[0]] ;

    nextRotorsIO2[0] = nextRotorsIO1[1]; 
    nextRotorsIO2[1] = rotor2_curr[nextRotorsIO2[0]];

    nextRotorsIO3[0] = nextRotorsIO2[1]; 
    nextRotorsIO3[1] = rotor3_curr[nextRotorsIO3[0]];

    //Reflector
    nextReflectorIO[0] = nextRotorsIO3[1];
    nextReflectorIO[1] = reflector[nextReflectorIO[0]];
   
    nextRotorsIO3[2] = nextReflectorIO[1];
    nextRotorsIO3[3] = inverse_cipher(nextRotorsIO3[2],rotor3_curr);

    nextRotorsIO2[2] = nextRotorsIO3[3];
    nextRotorsIO2[3] = inverse_cipher(nextRotorsIO2[2],rotor2_curr);

    nextRotorsIO1[2] = nextRotorsIO2[3];
    nextRotorsIO1[3] = inverse_cipher(nextRotorsIO1[2],rotor1_curr);

    setRotorIO1(nextRotorsIO1);
    setRotorIO2(nextRotorsIO2);
    setRotorIO3(nextRotorsIO3);
    setReflectorIO(nextReflectorIO);

    //add to buffers
    const inputBuff_copy = inputBuff.slice();
    const outputBuff_copy = outputBuff.slice(); 
    setInputBuff(inputBuff_copy + i);
    setOutputBuff(outputBuff_copy + index_to_character(nextRotorsIO1[3]));
  }
    
  //
  // Setting up the default Rotors and Reflector
  // Rotors are defined as integer arrays so that [5,3,...] maps A to F, B to D
  // 
  const [rotor1, setRotor1] = useState([5,3,11,15,20,22,19,4,7,23,0,24,16,12,8,6,25,21,13,2,18,10,1,17,9,14]);
  const [rotor2, setRotor2] = useState([12,11,19,7,8,13,4,6,14,16,0,25,17,10,1,23,3,18,9,5,20,22,24,21,15,2]);
  const [rotor3, setRotor3] = useState([0,16,18,6,11,25,14,2,19,3,10,13,8,24,15,4,9,20,23,12,1,5,17,22,7,21]);
  const [reflector, setReflector] = useState(letters_index.map((letter, i) => {
    return (letter%2 ? letter-1 : letter+1)%26;
  }));

  //not needed since we can use counts of output buffer length
  //these define the amount each rotor is rotated (starting at 0)
  //const [rotor1_rot, setRotor1_rot] = useState(0);
  //const [rotor2_rot, setRotor2_rot] = useState(0);

  //Keep track of the input from the keypad
  const [input, setInput] = useState(null);

  //recording the input and output buffers 
  const [inputBuff, setInputBuff] = useState('');
  const [outputBuff, setOutputBuff] = useState('');

  //record the input and output of each rotor. There are two pairs to keep track of (those going left and going right).
  //IO are (R->L Input, R->L Output, L->R Input, L->R Output)
  const [rotorIO1, setRotorIO1] = useState([null, null, null, null]);
  const [rotorIO2, setRotorIO2] = useState([null, null, null, null]);
  const [rotorIO3, setRotorIO3] = useState([null, null, null, null]);
  const [reflectorIO, setReflectorIO] = useState([null, null]);

  return (
        <div> 
          <div className="enigma_machine">  
            <div>
                <Reflector config={reflector} IO={reflectorIO} name="reflector"/>
                <Rotor config={rotor3} IO={rotorIO3} name="rotor3"/>
                <Rotor config={rotor2} IO={rotorIO2} name="rotor2"/>
                <Rotor config={rotor1} IO={rotorIO1} name="rotor1"/>
            </div>

            <div className="io">
              <div className="io">
                Output:    
                <button className="output">{index_to_character(rotorIO1[3])} </button>

              </div>
              <br/>
              <div>
                <Keypad config={qwerty} onLetterClick={handleLetterClick} input={input}/>
              </div>
            </div>
          </div>

          <div className="iobuffers">
            <IOBuffers inputbuff={inputBuff} outputbuff={outputBuff} />

            <EnigmaConfiguration reflector={reflector} rotor1={rotor1} rotor2={rotor2} rotor3={rotor3} />
          </div>
        
          

      </div> 

      );
}
