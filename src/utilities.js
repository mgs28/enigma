import { letters } from './constants';

export function shuffle(array_input) {
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

export function index_to_character(idx) {
  if (idx >= 0 && idx < 26) {
    return letters[idx];
  }
  //else
  return '';
}

export function character_to_idx(c) {
  //can be smarter than this but it is only 26 letters
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] == c) {
      return i;
    }
  }

  return null;
}
//c is a character to reverse lookup in the rotor r
export function inverse_cipher(c, r) {
  //Question: Can I make this more efficient? It's only 26 characters so it is not important right now.
  for (var i = 0; i < r.length; i++) {
    if (r[i] == c) {
      return i;
    }
  }

  return null;
}
export function rotate_rotor(r) {

  return rotate_rotor_mechanical(r);
  //return rotate_rotor_software(r);
  //return r; 
}
//rotate the rotor with the easiest way to do it in software 
function rotate_rotor_software(r) {

  return [
    ...r.slice(1),
    r.slice(0, 1)
  ];

}
//Rotate the rotor with a mechanical representation where the mapping between letters shifts to the next letter (e.g. A->B then B->C after a rotation). 
function rotate_rotor_mechanical(r) {
  //create the transformation vector 
  let newrotor = r.map((v, i) => {
    return v - i;
  });

  //shift the entries
  newrotor.unshift(newrotor.pop());

  //create the new mapping
  newrotor = newrotor.map((v, i) => {
    return (i + v + (3 * 26)) % 26;
  });


  return newrotor;
}
