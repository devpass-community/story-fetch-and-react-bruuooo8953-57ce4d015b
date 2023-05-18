import { useState } from "react";
import axios from "axios";
import Container from "./components/Container";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  const handleClick = async (event) => {
    setIsLoading(true)
    const getCat = async () => {
      const responses = await axios.get('https://meowfacts.herokuapp.com/')
      const phrase = responses.data.data
      setQuote(phrase)
    }
    getCat()
    setIsLoading(false)
  }

  return (
    <Container>
      <button data-testid="button" onClick={e => handleClick(e)}>
        <span>get a fact</span>
      </button>
      {isLoading || quote === '' ? 
        ( <Spinner /> ) : ( <span data-testid="quote">{quote}</span> )
      }
    </Container>
  );
}

export default App;