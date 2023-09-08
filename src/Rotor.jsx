import React from 'react';
import { index_to_character, rotate_rotor } from './utilities';

import { RotorA, RotorB, RotorC, RotorD, RotorReflector} from './constants';

export function Rotor({ config, setConfig}) {

  const listwires = config.cipher.map((number, i) => {
    let isActiveLtoR = (number == config.first_out);
    let isActiveRtoL = (number == config.second_in);
    
    let color = "#ddd";
    let stroke = 2;
    if (isActiveLtoR) {
      color = "#ef8905";
      stroke = 3;
    } else if (isActiveRtoL) {
      color = "#f00";
      stroke = 3;
    }
    return (<polyline key={i} points={"30, " + (7 + (number * 10)) + ", 100," + (7 + (i * 10))} stroke={color} strokeWidth={stroke} />);
  }
  );

  function lookupRotor(v){
    switch (v){
      case 'A':
        return RotorA;
      case 'B':
        return RotorB;
      case 'C':
        return RotorC;
      default:
        return RotorD;
    }
  }

  function handleRotorChange(v){
    let config_temp = JSON.parse(JSON.stringify(config));

    config_temp.label = v; 
    
    //need to also rotate it by the right amount
    let rotations = config_temp.offset;
    let cipher_temp = lookupRotor(v);
    while(rotations > 0){
      cipher_temp = rotate_rotor(cipher_temp);
      rotations--;
    }
    config_temp.cipher = cipher_temp;

    setConfig(config_temp);
  }

  function handleOffsetChange(e){
    let config_temp = JSON.parse(JSON.stringify(config));

    //just start from scratch and rotate the rotor that many times
    config_temp.offset = parseInt(e.target.value);
    
    let rotations = config_temp.offset;
    let cipher_temp = lookupRotor(config_temp.label);
    while(rotations > 0){
      cipher_temp = rotate_rotor(cipher_temp);
      rotations--;
    }
    config_temp.cipher = cipher_temp;

    setConfig(config_temp);
  }

  return (
    <div className="rotorDiv">
        <div className="rotorConf">
          <form >
            <select value={config.label} onChange={e => handleRotorChange(e.target.value)}  >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>

            <select value={config.offset} onChange={e=> handleOffsetChange(e)} >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
            </select>                
          </form>  
        </div>  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="350"
      version="1.0"
    >
      <defs>
        <marker id="arrowhead" markerWidth="2" markerHeight="2"
          refX="2" refY="1.5" orient="auto">
          <polygon points="0 0, 3 2, 0 4" />
        </marker>
      </defs>
      <g>

        <rect width="90" height="265" stroke="#666666" strokeWidth="3" fill="rgb(255, 255, 255)" x="20" y="0" />

        {/* <!-- Left Nodes -->  */}
        <g>
          <rect x="10" y="5" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="15" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="25" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="35" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="45" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="55" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="65" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="75" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="85" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="95" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="105" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="115" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="125" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="135" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="145" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="155" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="165" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="175" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="185" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="195" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="205" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="215" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="225" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="235" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="245" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="255" width="20" height="5" strokeWidth="0" fill="#aaa" />
        </g>

        {/* <!-- Right Nodes -->  */}
        <g>
          <rect x="100" y="5" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="15" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="25" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="35" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="45" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="55" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="65" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="75" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="85" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="95" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="105" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="115" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="125" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="135" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="145" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="155" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="165" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="175" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="185" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="195" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="205" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="215" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="225" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="235" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="245" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="255" width="20" height="5" strokeWidth="0" fill="#aaa" />
        </g>

        {/* <!-- edges -->  */}
        <g>
          {listwires}
        </g>



        {/* <!-- mapping: always ordered left, right, arrow -->  */}
        <text x="25" y="290">{index_to_character(config.first_out)}</text>
        <text x="85" y="290">{index_to_character(config.first_in)}</text>
        <line x2="50" y2="285" x1="80" y1="285" stroke="#ef8905" strokeWidth="2  " markerEnd="url(#arrowhead)" />

        <text x="25" y="320">{index_to_character(config.second_in)}</text>
        <text x="85" y="320">{index_to_character(config.second_out)}</text>
        <line x1="50" y1="315" x2="80" y2="315" stroke="#f00" strokeWidth="2  " markerEnd="url(#arrowhead)" />


      </g>
    </svg>
    </div>
  );
}
