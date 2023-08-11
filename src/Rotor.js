import React from 'react';
import { index_to_character } from './Rotors';

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
    return (<polyline key={i} points={"30, " + (57 + (number * 10)) + ", 100," + (57 + (i * 10))} stroke={color} strokeWidth={stroke} />);
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
      <g>

        <rect width="90" height="265" stroke="#666666" strokeWidth="3" fill="rgb(255, 255, 255)" x="20" y="50" />

        {/* <!-- Left Nodes -->  */}
        <g>
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
          <rect x="10" y="265" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="275" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="285" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="295" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="10" y="305" width="20" height="5" strokeWidth="0" fill="#aaa" />
        </g>

        {/* <!-- Right Nodes -->  */}
        <g>
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
          <rect x="100" y="265" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="275" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="285" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="295" width="20" height="5" strokeWidth="0" fill="#aaa" />
          <rect x="100" y="305" width="20" height="5" strokeWidth="0" fill="#aaa" />
        </g>

        {/* <!-- edges -->  */}
        <g>
          {listwires}
        </g>



        {/* <!-- mapping: always ordered left, right, arrow -->  */}
        <text x="25" y="340">{index_to_character(IO[1])}</text>
        <text x="85" y="340">{index_to_character(IO[0])}</text>
        <line x2="50" y2="335" x1="80" y1="335" stroke="#ef8905" strokeWidth="2  " markerEnd="url(#arrowhead)" />

        <text x="25" y="370">{index_to_character(IO[2])}</text>
        <text x="85" y="370">{index_to_character(IO[3])}</text>
        <line x1="50" y1="365" x2="80" y2="365" stroke="#f00" strokeWidth="2  " markerEnd="url(#arrowhead)" />


      </g>
    </svg>
  );
}
