import React, { useState } from 'react';
import axios from 'axios';
import Container from './components/Container';
import Spinner from './components/Spinner';

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    
    try {
      const response = await axios.get('https://meowfacts.herokuapp.com/');
      const phrase = response.data.data;
      setQuote(phrase);
    } catch (error) {
      console.log('Error fetching quote:', error);
      setQuote('Failed to fetch quote');
    }
    
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
