import React from 'react'
import { useState } from 'react';
import EnigmaConfiguration from './EnigmaConfiguration';
import { Reflector } from './Reflector';
import { Keypad } from './Keypad';

//Question: I hate the global functions and the global consts. Any way to get away from them? 

//init the three rotors 
const letters_index = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const qwerty = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
export const query_index = [16, 22, 4, 17, 19, 24, 20, 8, 14, 15, 0, 18, 3, 5, 6, 7, 9, 10, 11, 25, 23, 2, 21, 1, 13, 12];


export function index_to_character(idx){
  if(idx >=0 && idx < 26){
    return letters[idx];
  }
  //else
  return ''; 
}

function character_to_idx(c){
  //can be smarter than this but it is only 26 letters
  for(var i=0;i<letters.length;i++){
    if(letters[i] == c){
      return i;
    }
  }

  return null;
}

//c is a character to reverse lookup in the rotor r
function inverse_cipher(c, r){
  //Question: Can I make this more efficient? It's only 26 characters so it is not important right now.

  for(var i =0;i<r.length;i++){
      if(r[i]==c){
        return i;
      }
  }

  return null;
}


function Rotor({config, IO, name}){

  const listwires = config.map((number, i) => {
      let isActiveLtoR = (number==IO[1]) ;
      let isActiveRtoL = (number==IO[2]) ;
      
      let color = "#ddd"; 
      let stroke = 2;
      if(isActiveLtoR){
        color = "#ef8905"; 
        stroke = 3;
      }else if (isActiveRtoL){
        color = "#f00"
        stroke = 3;
      } 
      return (<polyline key={i} points={"30, " + (57+(number*10)) + ", 100," + (57+(i*10))} stroke={color} strokeWidth={stroke} />);
    }
  );

    return (
    <svg 
    xmlns="http://www.w3.org/2000/svg"
   width="120" 
   height="400"
   version="1.0"
   >
  <defs>
    <marker id="arrowhead" markerWidth="2" markerHeight="2" 
    refX="2" refY="1.5" orient="auto">
      <polygon points="0 0, 3 2, 0 4" />
    </marker>
  </defs>
  <g >
    
    <rect  width="90" height="265" stroke="#666666" strokeWidth="3"  fill="rgb(255, 255, 255)" x="20" y="50" />
    
    {/* <!-- Left Nodes -->  */}
    <g>
        <rect  x="10" y="55" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="65" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="75" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="85" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="95" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="105" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="115" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="125" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="135" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="145" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="155" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="165" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="175" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="185" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="195" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="205" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="215" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="225" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="235" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="245" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="255" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="265" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="275" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="285" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="295" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="10" y="305" width="20" height="5" strokeWidth="0" fill="#aaa" />
    </g>

    {/* <!-- Right Nodes -->  */}
    <g> 
        <rect  x="100" y="55" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="65" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="75" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="85" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="95" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="105" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="115" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="125" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="135" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="145" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="155" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="165" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="175" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="185" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="195" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="205" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="215" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="225" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="235" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="245" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="255" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="265" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="275" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="285" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="295" width="20" height="5" strokeWidth="0" fill="#aaa" />
        <rect  x="100" y="305" width="20" height="5" strokeWidth="0" fill="#aaa" />
    </g> 
 
    {/* <!-- edges -->  */}
    <g>
        {listwires}
    </g>

    

    {/* <!-- mapping: always ordered left, right, arrow -->  */}
    <text x="25" y="340">{index_to_character(IO[1])}</text> 
    <text x="85" y="340">{index_to_character(IO[0])}</text> 
    <line x2="50" y2="335" x1="80" y1="335"  stroke="#ef8905" strokeWidth="2  " markerEnd="url(#arrowhead)" />

    <text x="25" y="370">{index_to_character(IO[2])}</text> 
    <text x="85" y="370">{index_to_character(IO[3])}</text> 
    <line x1="50" y1="365" x2="80" y2="365"  stroke="#f00" strokeWidth="2  " markerEnd="url(#arrowhead)" />


  </g>
    </svg>
);
  }
  
export default function Rotors() {

  function shuffle(array_input) {
    var array = array_input.slice();
    //Question: Not a huge fan of these for loops. Any better alternative? 
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleLetterClick(i){
    setInput(i);

    //remember to make the data updates immutable. 
    const nextRotorsIO1 = rotorIO1.slice();
    const nextRotorsIO2 = rotorIO2.slice();
    const nextRotorsIO3 = rotorIO1.slice();
    const nextReflectorIO = reflectorIO.slice();
    const input_idx = character_to_idx(i);


    nextRotorsIO1[0] = input_idx;
    nextRotorsIO1[1] = rotor1[nextRotorsIO1[0]];

    nextRotorsIO2[0] = nextRotorsIO1[1]; 
    nextRotorsIO2[1] = rotor2[nextRotorsIO2[0]];

    nextRotorsIO3[0] = nextRotorsIO2[1]; 
    nextRotorsIO3[1] = rotor3[nextRotorsIO3[0]];

    //Shifting as a placeholder for rotors 
    nextReflectorIO[0] = nextRotorsIO3[1];
    nextReflectorIO[1] = reflector[nextReflectorIO[0]];
    //let reflectorOut = (nextRotorsIO3[1]+1) % 26;

    nextRotorsIO3[2] = nextReflectorIO[1];
    nextRotorsIO3[3] = inverse_cipher(nextRotorsIO3[2],rotor3);

    nextRotorsIO2[2] = nextRotorsIO3[3];
    nextRotorsIO2[3] = inverse_cipher(nextRotorsIO2[2],rotor2);

    nextRotorsIO1[2] = nextRotorsIO2[3];
    nextRotorsIO1[3] = inverse_cipher(nextRotorsIO1[2],rotor1);

    setRotorIO1(nextRotorsIO1);
    setRotorIO2(nextRotorsIO2);
    setRotorIO3(nextRotorsIO3);
    setReflectorIO(nextReflectorIO);
  }

  const [rotor1, setRotor1] = useState(shuffle(letters_index));
  const [rotor2, setRotor2] = useState(shuffle(letters_index));
  const [rotor3, setRotor3] = useState(shuffle(letters_index));
  const [reflector, setReflector] = useState(letters_index.map((letter, i) => {
    return (letter%2 ? letter-1 : letter+1)%26;
  }));


  const [input, setInput] = useState(null);

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
          
          <div className="configurationInfo">
            <EnigmaConfiguration reflector={reflector} rotor1={rotor1} rotor2={rotor2} rotor3={rotor3} />
          </div>
      </div> 

      );
}
