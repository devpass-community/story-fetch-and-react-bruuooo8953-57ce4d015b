import React, { useState } from 'react';
import Container from './components/Container';
import Spinner from './components/Spinner';

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
      const response = await fetch('https://meowfacts.herokuapp.com/').then(response => response.json())
      const phrase = response.data
      setQuote(phrase)
    setIsLoading(false);
  };

  return (
    <Container>
      <button data-testid="button" onClick={handleClick}>
        <span>Get a fact</span>
      </button>
      {isLoading || quote === '' ? (
        <Spinner />
      ) : (
        <span data-testid="quote">{quote}</span>
      )}
    </Container>
  );
}

export default App;
