import React from 'react';
import { index_to_character } from './utilities';

export function Rotor({ config, IO, name }) {

  const listwires = config.map((number, i) => {
    let isActiveLtoR = (number == IO[1]);
    let isActiveRtoL = (number == IO[2]);
    

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

  return (
    <div className="rotorDiv">
        <div className="rotorConf">
          <form >
            <select defaultValue="D" >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>

            <select defaultValue="0" >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
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
        <text x="25" y="290">{index_to_character(IO[1])}</text>
        <text x="85" y="290">{index_to_character(IO[0])}</text>
        <line x2="50" y2="285" x1="80" y1="285" stroke="#ef8905" strokeWidth="2  " markerEnd="url(#arrowhead)" />

        <text x="25" y="320">{index_to_character(IO[2])}</text>
        <text x="85" y="320">{index_to_character(IO[3])}</text>
        <line x1="50" y1="315" x2="80" y2="315" stroke="#f00" strokeWidth="2  " markerEnd="url(#arrowhead)" />


      </g>
    </svg>
    </div>
  );
}