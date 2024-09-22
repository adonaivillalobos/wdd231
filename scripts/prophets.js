// Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector('#cards');

// Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData() {
  try {
    // Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);

    // Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await response.json();

    // Call a function named "displayProphets" and include the "data.prophets" argument.
    // console.table(data);
    displayProphets(data.prophets);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

// Define a function expression named "displayProphets" that handles a single parameter named "prophets".
const displayProphets = (prophets) => {
  // Process the parameter value and build a card for each prophet.
  prophets.forEach((prophet) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${prophet.name}</h2>
      <p>Birth: ${prophet.birth}</p>
      <p>Death: ${prophet.death}</p>
    `;
    cards.appendChild(card);
  });
};

// Call the function getProphetData() in the main line of your .js code to test the fetch and response.
getProphetData();