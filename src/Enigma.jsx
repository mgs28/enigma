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

    //rotate if we need to
    if(inputBuff.length > 0) {
      console.log("Rotor 1 offset = " + rotor1_curr.offset);
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

    setRotor1(rotor1_curr); 
    setRotor2(rotor2_curr); 
    setRotor3(rotor3_curr); 

    //remember to make the data updates immutable. 
    const nextRotorsIO1 = rotorIO1.slice();
    const nextRotorsIO2 = rotorIO2.slice();
    const nextRotorsIO3 = rotorIO1.slice();
    const nextReflectorIO = reflectorIO.slice();
    const input_idx = character_to_idx(i);

    nextRotorsIO1[0] = input_idx;
    nextRotorsIO1[1] = rotor1_curr.cipher[nextRotorsIO1[0]] ;

    nextRotorsIO2[0] = nextRotorsIO1[1]; 
    nextRotorsIO2[1] = rotor2_curr.cipher[nextRotorsIO2[0]];

    nextRotorsIO3[0] = nextRotorsIO2[1]; 
    nextRotorsIO3[1] = rotor3_curr.cipher[nextRotorsIO3[0]];

    //Reflector
    nextReflectorIO[0] = nextRotorsIO3[1];
    nextReflectorIO[1] = reflector.cipher[nextReflectorIO[0]];
   
    nextRotorsIO3[2] = nextReflectorIO[1];
    nextRotorsIO3[3] = inverse_cipher(nextRotorsIO3[2],rotor3_curr.cipher);

    nextRotorsIO2[2] = nextRotorsIO3[3];
    nextRotorsIO2[3] = inverse_cipher(nextRotorsIO2[2],rotor2_curr.cipher);

    nextRotorsIO1[2] = nextRotorsIO2[3];
    nextRotorsIO1[3] = inverse_cipher(nextRotorsIO1[2],rotor1_curr.cipher);

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


  const [rotor1, setRotor1] = useState({
    name: "rotor1", 
    label: "D",
    offset: 0,
    cipher: RotorD
  });
  const [rotor2, setRotor2] = useState({
    name: "rotor2", 
    label: "B",
    offset: 0,
    cipher: RotorB
  });
  const [rotor3, setRotor3] = useState({
    name: "rotor3", 
    label: "C",
    offset: 0,
    cipher: RotorC
  });
  const [reflector, setReflector] = useState({
    name: "reflector", 
    label: "",
    offset: 0,
    cipher: RotorReflector
  });

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
                <Rotor config={rotor3}  setConfig={setRotor3} IO={rotorIO3}/>
                <Rotor config={rotor2}  setConfig={setRotor2} IO={rotorIO2}/>
                <Rotor config={rotor1}  setConfig={setRotor1} IO={rotorIO1}/>
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
