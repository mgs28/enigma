import React from 'react'
import { useState } from 'react';

//init the three rotors 
const letters_index = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const qwerty = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const query_index = [16, 22, 4, 17, 19, 24, 20, 8, 14, 15, 0, 18, 3, 5, 6, 7, 9, 10, 11, 25, 23, 2, 21, 1, 13, 12];


function index_to_character(idx){
  if(idx >=0 && idx < 26){
    return letters[idx];
  }
  //else
  return ''; 
  
}

function Keypad({config, onLetterClick, input}){

  //Question: It feels silly to push input into this function to highlight the input key. Is there a better way? 

  //Question: Is this the right place to define the arrow function? I'm not sure if it causing multiple renders. However, I 
  //need to pass in each key to record the right input and I only know that here

  const listwires = config.map((number, i) => {
        let isInput = number == input ? true : false;  
        return (<button className={isInput ? "square_clicked" : "square"} key={query_index[i]} onClick={() => onLetterClick(number)} value={query_index[i]}>{number}</button>);
    }
  );

  return (
    <div>
      <div className="board-row">
        {listwires.slice(0,10)}
      </div>
      <div className="board-row">
        <div className="keypadbuff"/>
        {listwires.slice(10,19)}
      </div>
      <div className="board-row">
        <div className="keypadbuff"/>
        <div className="keypadbuff"/>
        {listwires.slice(19)}
      </div>
    </div>
  );
}

function Rotor({config, IO, name}){

  const listwires = config.map((number, i) => {
      return (<polyline key={i} points={"30, " + (57+(number*10)) + ", 100," + (57+(i*10))} stroke="#aaa" strokeWidth="2" />);
    }
  );

    return (
    <svg 
    xmlns="http://www.w3.org/2000/svg"
   width="150" 
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
    <text x="10" y="340">{index_to_character(IO[1])}</text> 
    <text x="100" y="340">{index_to_character(IO[0])}</text> 
    <line x2="50" y2="335" x1="80" y1="335"  stroke="#000" strokeWidth="2  " markerEnd="url(#arrowhead)" />

    <text x="10" y="370">{index_to_character(IO[2])}</text> 
    <text x="100" y="370">{index_to_character(IO[3])}</text> 
    <line x1="50" y1="365" x2="80" y2="365"  stroke="#000" strokeWidth="2  " markerEnd="url(#arrowhead)" />


  </g>
    </svg>
);
  }
  

export default function Rotors() {

  function shuffle(array_input) {
    var array = array_input.slice();
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
  }

  const [rotor1, setRotor1] = useState(shuffle(letters_index));
  const [rotor2, setRotor2] = useState(shuffle(letters_index));
  const [rotor3, setRotor3] = useState(shuffle(letters_index));
  const [input, setInput] = useState(null);

  //IO are (R->L Input, R->L Output, L->R Input, L->R Output)
  const [rotorIO1, setRotorIO1] = useState([1, 2, 3, 4]);
  const [rotorIO2, setRotorIO2] = useState([5,6,7,8]);
  const [rotorIO3, setRotorIO3] = useState([9,10,11,12]);

  /* 
  console.log(rotor1);
  console.log(rotor2);
  console.log(rotor3);
  */

  return (
        <div>  
          <div>
              <Rotor config={rotor3} IO={rotorIO3} name="rotor3"/>
              <Rotor config={rotor2} IO={rotorIO2} name="rotor2"/>
              <Rotor config={rotor1} IO={rotorIO1} name="rotor1"/>
          </div>

          <div className="board-row">
            Input:    
            <button className="output">{input}</button>
            Output:    
            <button className="output"> </button>

          </div>
          <br/>
          <div>
            <Keypad config={qwerty} onLetterClick={handleLetterClick} input={input}/>
          </div>

        </div>
      );
}
