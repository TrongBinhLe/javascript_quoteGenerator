let apiQuotes = [];

//Show new Quote
function newQuotes() {
  const newQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log("newQuotes: ", newQuote);
}
// Get Quotes from API
async function getQuotes() {
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

// OnLoad
getQuotes();
