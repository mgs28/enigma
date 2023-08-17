import React from 'react';
import { query_index } from './constants';

export function Keypad({ config, onLetterClick, input }) {
  //Question: It feels silly to push input into this function to highlight the input key. Is there a better way? 

  //Question: Is this the right place to define the arrow function? I'm not sure if it causing multiple renders. However, I 
  //need to pass in each key to record the right input and I only know that here
  const listwires = config.map((letter, i) => {
    let isInput = (letter == input ? true : false);
    return (<div className={isInput ? "square_clicked" : "square"} key={query_index[i]} onClick={() => onLetterClick(letter)} value={query_index[i]}>{letter}</div>);
  }
  );

  return (
    <div>
      <div className="board-row">
        {listwires.slice(0, 10)}
      </div>
      <div className="board-row">
        <div className="keypadbuff" />
        {listwires.slice(10, 19)}
      </div>
      <div className="board-row">
        <div className="keypadbuff" />
        <div className="keypadbuff" />
        {listwires.slice(19)}
      </div>
    </div>
  );
}
