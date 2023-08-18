//init the three rotors 
export const letters_index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
export const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export const qwerty = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
export const query_index = [16, 22, 4, 17, 19, 24, 20, 8, 14, 15, 0, 18, 3, 5, 6, 7, 9, 10, 11, 25, 23, 2, 21, 1, 13, 12];


//Pre configured rotors 
export const RotorA = [5,3,11,15,20,22,19,4,7,23,0,24,16,12,8,6,25,21,13,2,18,10,1,17,9,14];
export const RotorB = [12,11,19,7,8,13,4,6,14,16,0,25,17,10,1,23,3,18,9,5,20,22,24,21,15,2];
export const RotorC = [0,16,18,6,11,25,14,2,19,3,10,13,8,24,15,4,9,20,23,12,1,5,17,22,7,21];
export const RotorD = [1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

export const RotorReflector = letters_index.map((letter, i) => {
    return (letter%2 ? letter-1 : letter+1)%26;
  });