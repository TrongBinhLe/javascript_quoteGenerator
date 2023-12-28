const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];
// Show Loading 
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
//Show new Quote
function newQuotes() {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log("newQuotes: ", quote);
  // authorText.textContent = quote.author;
  // Check if Author field is blank and replace with 'UNKNOW'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length to determine styling
  if(quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  //Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete()
} 
// Get Quotes from API
async function getQuotes() {
  loading();
  const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuotes();
  } catch (error) {
    // Catch some errors
    console.log("Get the error: ", error);
  }
}

//Tweet Quote

function tweetQuote() {
  const twitterURl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -  ${authorText.textContent}`;
  window.open(twitterURl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuotes);
twitterBtn.addEventListener('click', tweetQuote);

// OnLoad
getQuotes();
