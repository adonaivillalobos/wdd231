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

    // Add a console.table() expression method to check the data response at this point in the console window.
    console.table(data);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

// Call the function getProphetData() in the main line of your .js code to test the fetch and response.
getProphetData();