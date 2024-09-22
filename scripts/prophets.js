const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data response
}
getProphetData();

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    // card build code goes here

    const displayProphets = (prophets) => {
        prophets.forEach((prophet) => {
      
        });
      }
  }

  