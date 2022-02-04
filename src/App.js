import './App.css';
import Word from './components/Word.js';
import Alphabet from './components/Alphabet.js';

function App() {
  let words = ['grain', 'belts', 'shute', 'those'];

  let final = 'those';

  return (
    <div>
      <h1>Wordle Clone</h1>
      <div className='cols2'>
        <div className='col1'>
          {words.map((word, ind) => {
            return <Word key={ind} word={word} final={final} />;
          })}
        </div>
        <div className='col2'>
          <Alphabet />
        </div>
      </div>
    </div>
  );
}

export default App;
