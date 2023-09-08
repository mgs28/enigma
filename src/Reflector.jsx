import React from 'react';
import { index_to_character } from './utilities';

export function Reflector({ config, IO }) {

  const listwires = config.cipher.map((number, i) => {
    let stroke = 2;
    let color = "#aaa";
    if (number == IO[1]) {
      color = "#ef8905";
      stroke = 3;
    }

    //this helps visualize the reflector by separating the loops
    let max = 80 - (i * 2);

    return (<polyline key={i} points={"100, " + (7 + (number * 10)) + ", " + max + "," + (7 + (number * 10)) + ", " + max + "," + (7 + (i * 10)) + ", 100," + (7 + (i * 10))} fill="none" stroke={color} strokeWidth={stroke} />);
  }
  );

  return (
    <div className="rotorDiv">
       <div className="rotorConf"></div>
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

        <text x="85" y="320">{index_to_character(IO[1])}</text>
        <text x="85" y="290">{index_to_character(IO[0])}</text>
        <polyline points="80,285, 50, 285, 50,320, 80, 320" stroke="#ef8905" fill="none" strokeWidth="2  " markerEnd="url(#arrowhead)" />
        <polyline points={"100, " + (7 + (IO[1] * 10)) + ", " + (80 - (2 * IO[0])) + "," + (7 + (IO[1] * 10)) + ", " + (80 - (2 * IO[0])) + "," + (7 + (IO[0] * 10)) + ", 100," + (7 + (IO[0] * 10))} fill="none" stroke="#ef8905" strokeWidth="2" />

      </g>
    </svg>
    </div>
  );
}
