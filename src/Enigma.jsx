import React from 'react'
import { useState } from 'react';
import EnigmaConfiguration from './EnigmaConfiguration';
import { Reflector } from './Reflector';
import { Keypad } from './Keypad';
import { Rotor } from './Rotor';
import {IOBuffers} from './IOBuffers' 

import { rotate_rotor, character_to_idx, inverse_cipher, index_to_character } from './utilities';
import { letters_index, qwerty, RotorA, RotorB, RotorC, RotorD, RotorReflector} from './constants';
 
export default function Enigma() {

  function handleLetterClick(i){

    setInput(i);

    let rotor1_curr = rotor1.slice();
    let rotor2_curr = rotor2.slice();
    let rotor3_curr = rotor3.slice();

    //rotate if we need to
    if(inputBuff.length > 0) {
      rotor1_curr = rotate_rotor(rotor1);
      setRotor1Offset((rotor1_offset+1)%26);
      setRotor1(rotor1_curr); 

      if(inputBuff.length % 26 == 0){
        console.log("rotate second rotor");
        rotor2_curr = rotate_rotor(rotor2);
        setRotor2(rotor2_curr);
        setRotor2Offset((rotor2_offset+1)%26);
      }

      if(inputBuff.length % 676 == 0){
        rotor3_curr = rotate_rotor(rotor3);
        setRotor3(rotor3_curr);
        setRotor3Offset((rotor3_offset+1)%26);
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
  const [rotor1_label, setRotor1Label] = useState('D');
  const [rotor2_label, setRotor2Label] = useState('B');
  const [rotor3_label, setRotor3Label] = useState('C');
  
  const [rotor1_offset, setRotor1Offset] = useState(0);
  const [rotor2_offset, setRotor2Offset] = useState(0);
  const [rotor3_offset, setRotor3Offset] = useState(0);


  const [rotor1, setRotor1] = useState(RotorD);
  const [rotor2, setRotor2] = useState(RotorB);
  const [rotor3, setRotor3] = useState(RotorC);
  const [reflector, setReflector] = useState(RotorReflector);


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
                <Rotor config={rotor3} configLabel={rotor3_label} setConfig={setRotor3} setConfigLabel={setRotor3Label} offset={rotor3_offset} setOffset={setRotor3Offset} IO={rotorIO3} name="rotor3"/>
                <Rotor config={rotor2} configLabel={rotor2_label} setConfig={setRotor2} setConfigLabel={setRotor2Label} offset={rotor2_offset} setOffset={setRotor2Offset} IO={rotorIO2} name="rotor2"/>
                <Rotor config={rotor1} configLabel={rotor1_label} setConfig={setRotor1} setConfigLabel={setRotor1Label} offset={rotor1_offset} setOffset={setRotor1Offset} IO={rotorIO1} name="rotor1"/>
            </div>
            <div className="rotorClear"> </div>

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
          </div>
        
          

      </div> 

      );
}
