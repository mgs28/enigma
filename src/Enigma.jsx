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

    let rotor1_curr = JSON.parse(JSON.stringify(rotor1));
    let rotor2_curr = JSON.parse(JSON.stringify(rotor2));
    let rotor3_curr = JSON.parse(JSON.stringify(rotor3));
    let reflector_curr = JSON.parse(JSON.stringify(reflector));

    //rotate if we need to
    if(inputBuff.length > 0) {
      //console.log("Rotor 1 offset = " + rotor1_curr.offset);
      rotor1_curr.cipher = rotate_rotor(rotor1_curr.cipher);
      rotor1_curr.offset = (rotor1_curr.offset + 1)%26;
      
      if(rotor1_curr.offset == 0){
        //console.log("rotate second rotor");
        rotor2_curr.cipher = rotate_rotor(rotor2_curr.cipher);
        rotor2_curr.offset = (rotor2_curr.offset+1)%26;

        if(rotor2_curr.offset == 0){
          //console.log("rotate third rotor");
          rotor3_curr.cipher = rotate_rotor(rotor3_curr.cipher);
          rotor3_curr.offset = (rotor3_curr.offset+1)%26;
          
        }
      }
    }

    //remember to make the data updates immutable. 
    const input_idx = character_to_idx(i);

    rotor1_curr.first_in = input_idx;
    rotor1_curr.first_out = rotor1_curr.cipher[rotor1_curr.first_in] ;

    rotor2_curr.first_in = rotor1_curr.first_out;
    rotor2_curr.first_out = rotor2_curr.cipher[rotor2_curr.first_in] ;

    rotor3_curr.first_in = rotor2_curr.first_out;
    rotor3_curr.first_out = rotor3_curr.cipher[rotor3_curr.first_in] ;

    //Reflector
    reflector_curr.in = rotor3_curr.first_out;
    reflector_curr.out = reflector_curr.cipher[reflector_curr.in];

    rotor3_curr.second_in = reflector_curr.out;
    rotor3_curr.second_out = inverse_cipher(rotor3_curr.second_in,rotor3_curr.cipher);

    rotor2_curr.second_in = rotor3_curr.second_out;
    rotor2_curr.second_out = inverse_cipher(rotor2_curr.second_in,rotor2_curr.cipher);

    rotor1_curr.second_in = rotor2_curr.second_out;
    rotor1_curr.second_out = inverse_cipher(rotor1_curr.second_in,rotor1_curr.cipher);

    //add to buffers
    const inputBuff_copy = inputBuff.slice();
    const outputBuff_copy = outputBuff.slice(); 
    setInputBuff(inputBuff_copy + i);
    setOutputBuff(outputBuff_copy + index_to_character(rotor1_curr.second_out));

    setRotor1(rotor1_curr); 
    setRotor2(rotor2_curr); 
    setRotor3(rotor3_curr); 
    setReflector(reflector_curr); 

  }
    
  //
  // Setting up the default Rotors and Reflector
  // Rotors are defined as integer arrays so that [5,3,...] maps A to F, B to D
  // 

  const [rotor1, setRotor1] = useState({
    name: "rotor1", 
    label: "D",
    offset: 0,
    cipher: RotorD, 
    first_in: null,
    first_out: null, 
    second_in: null,
    second_out: null
  });

  const [rotor2, setRotor2] = useState({
    name: "rotor2", 
    label: "B",
    offset: 0,
    cipher: RotorB,
    first_in: null,
    first_out: null, 
    second_in: null,
    second_out: null
  });
  const [rotor3, setRotor3] = useState({
    name: "rotor3", 
    label: "C",
    offset: 0,
    cipher: RotorC,
    first_in: null,
    first_out: null, 
    second_in: null,
    second_out: null
  });

  const [reflector, setReflector] = useState({
    name: "reflector", 
    label: "",
    offset: 0,
    cipher: RotorReflector,
    in: null,
    out: null
  });

  //Keep track of the input from the keypad
  const [input, setInput] = useState(null);

  //recording the input and output buffers 
  const [inputBuff, setInputBuff] = useState('');
  const [outputBuff, setOutputBuff] = useState('');

  return (
        <div> 
          <div className="enigma_machine">  
            <div>
                <Reflector config={reflector} name="reflector"/>
                <Rotor config={rotor3} setConfig={setRotor3} />
                <Rotor config={rotor2} setConfig={setRotor2} />
                <Rotor config={rotor1} setConfig={setRotor1} />
            </div>
            <div className="rotorClear"> </div>

            <div className="io">
              <div className="io">
                Output:    
                <button className="output">{index_to_character(rotor1.second_out)} </button>

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
