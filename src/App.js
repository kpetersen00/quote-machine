import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaTwitterSquare } from 'react-icons/fa';
const url =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
function App() {
  const [quote, setQuote] = useState({});

  const getQuote = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newQuote =
        data.quotes[Math.floor(Math.random() * data.quotes.length)];
      setQuote(newQuote);
      // console.log(quote);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <main>
      <section className='quote-container'>
        <h2>Quote of the Day</h2>
        <article id='quote-box'>
          <p id='text'>
            <FaQuoteLeft />
            {quote.quote}
            <FaQuoteRight />
          </p>
          <p id='author'>- {quote.author}</p>

          <div className='btn-container'>
            <a
              id='tweet-quote'
              href={`https://twitter.com/intent/tweet?url="${quote.quote}" - ${quote.author}`}
              target='_blank'
            >
              <FaTwitterSquare />
            </a>
            <button id='new-quote' onClick={getQuote}>
              New Quote
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
