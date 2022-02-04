import PropTypes from 'prop-types';

const Word = ({ word, final }) => {
  let letters = Array.from(word);

  const checkLetter = (char, ind) => {
    const goodC = final.charAt(ind);
    if (char === goodC) {
      return 'right';
    } else if (final.includes(char)) {
      return 'wrong';
    } else {
      return 'notfound';
    }
  };

  return (
    <div className='word'>
      {letters.map((char, ind) => {
        let classes = `letterholder ${checkLetter(char, ind)}`;

        return (
          <p key={ind} className={classes}>
            {char.toUpperCase()}
          </p>
        );
      })}
    </div>
  );
};

Word.propTypes = {
  word: PropTypes.string.isRequired,
  final: PropTypes.string.isRequired,
};

export default Word;
