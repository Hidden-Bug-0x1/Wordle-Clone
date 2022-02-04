import './Alphabet.css';
import { useHook } from 'react';

const Alphabet = () => {
  const letters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  return (
    <div className='group'>
      {letters.map((char, ind) => {
        return (
          <p key={ind} className='letterholder'>
            {char}
          </p>
        );
      })}
    </div>
  );
};

export default Alphabet;
