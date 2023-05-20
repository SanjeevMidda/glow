import './index.css';
import Word from './components/Word';
import { useState } from 'react';

function App() {

  let display = [true, false];

  const [status, setStatus] = useState(true);

  let newWords = []
  function randomPosition(){
    return `${Math.floor(Math.random() * 1400)}px`;
  }


  function randomDisplay(){
    return display[Math.floor(Math.random() *display.length)];
  }

  for (let index = 0; index < 100; index++) {
    newWords.push(index + 1)    
  }

  function randomFontSize(){
    return `${Math.floor(Math.random() * 50)}px`;
  }
  return (
    <div className="App" onClick={() => {setStatus(!status)}}>
     {
      newWords.map((word, index) => {
        return <Word key ={index} word={word} left={randomPosition()} top={randomPosition()} status = {randomDisplay()}/>
      })
     }
    </div>
  );
}

export default App;
