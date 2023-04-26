import { useEffect, useState } from 'react';

const words = ['sushi', 'ramen', 'tempura', 'udon', 'soba'];

function TypingGame() {
  const [currentWord, setCurrentWord] = useState('');
  const [typedWord, setTypedWord] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setIsPlaying(false);
      }
    }
  }, [isPlaying, timeLeft]);

  function startGame() {
    setIsPlaying(true);
    setTimeLeft(10);
    setScore(0);
    setTypedWord('');
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  }

  function handleKeyPress(e) {
    if (!isPlaying) return;

    const char = e.key;
    const expectedChar = currentWord[typedWord.length];

    if (char === expectedChar) {
      setTypedWord(typedWord + char);

      if (typedWord.length + 1 === currentWord.length) {
        setScore(score + 1);
        setTypedWord('');
        setCurrentWord(words[Math.floor(Math.random() * words.length)]);
      }
    }
  }

  return (
    <div onKeyDown={handleKeyPress} tabIndex="0" style={{ outline: 'none' }}>
      <h1>Typing Game</h1>
      <p>Current word: {currentWord}</p>
      <p>Typed word: {typedWord}</p>
      <p>Time left: {timeLeft} seconds</p>
      <p>Score: {score}</p>
      {!isPlaying && (
        <button onClick={startGame}>Start Game</button>
      )}
    </div>
  );
}

export default TypingGame;
